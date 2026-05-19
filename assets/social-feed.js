// DwellPraise - Social Feed Auto-Updater
// Fetches latest content from YouTube and Substack via RSS feeds
// No API keys required - uses public RSS feeds with CORS proxy

const SOCIAL_CONFIG = {
  youtube: {
    // Find your channel ID at: https://www.youtube.com/account_advanced
    // It looks like: UCxxxxxxxxxxxxxxxxxxxxxxx
    channelId: 'UCnkjzNP4C7iOQ9jwnuFII7Q',
  },
  substack: {
    // Your Substack publication URL (no trailing slash)
    publicationUrl: 'https://dwellpraise.substack.com',
  },
  spotify: {
    // Embed a playlist or podcast show
    // Playlist: https://open.spotify.com/embed/playlist/YOUR_ID
    // Show: https://open.spotify.com/embed/show/YOUR_ID
    embedUrl: 'https://open.spotify.com/playlist/5bCutUwhS76nlRTyGJxpHb?si=E-o-LGYtT4qGTQjBUt_Spg',
  },
  // Cache duration: 1 hour (3600000 ms)
  cacheTTL: 3600000,
};

const CORS_PROXY = 'https://api.allorigins.win/get?url=';

async function fetchWithCache(url, cacheKey) {
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < SOCIAL_CONFIG.cacheTTL) {
        return data;
      }
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }

  try {
    const response = await fetch(CORS_PROXY + encodeURIComponent(url));
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const proxyData = await response.json();
    const contents = proxyData.contents;
    localStorage.setItem(cacheKey, JSON.stringify({ data: contents, timestamp: Date.now() }));
    return contents;
  } catch (error) {
    console.error('[Social Feed] Fetch failed for ' + url + ':', error);
    return cached ? JSON.parse(cached).data : null;
  }
}

async function fetchYouTubeLatest() {
  if (SOCIAL_CONFIG.youtube.channelId === 'YOUR_YOUTUBE_CHANNEL_ID') {
    console.warn('[Social Feed] YouTube channel ID not configured. Edit SOCIAL_CONFIG in assets/social-feed.js');
    return null;
  }

  var feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + SOCIAL_CONFIG.youtube.channelId;
  var xml = await fetchWithCache(feedUrl, 'dp_youtube_feed');

  if (!xml) return null;

  try {
    var parser = new DOMParser();
    var doc = parser.parseFromString(xml, 'text/xml');
    var entries = doc.querySelectorAll('entry');

    if (entries.length === 0) return null;

    var entry = entries[0];
    var id = entry.querySelector('id') ? entry.querySelector('id').textContent : '';
    var videoId = id.replace('yt:video:', '');
    var title = entry.querySelector('title') ? entry.querySelector('title').textContent : '';
    var linkEl = entry.querySelector('link[rel="alternate"]');
    var link = linkEl ? linkEl.getAttribute('href') : 'https://www.youtube.com/watch?v=' + videoId;
    var published = entry.querySelector('published') ? entry.querySelector('published').textContent : '';

    var mediaGroup = doc.querySelector('media\\:group, group');
    var thumbnail = '';
    if (mediaGroup) {
      var thumb = mediaGroup.querySelector('thumbnail');
      if (thumb) thumbnail = thumb.getAttribute('url');
    }
    if (!thumbnail && videoId) {
      thumbnail = 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg';
    }

    var description = '';
    if (mediaGroup) {
      var descEl = mediaGroup.querySelector('media\\:description, description');
      if (descEl) description = descEl.textContent;
    }

    return { videoId: videoId, title: title, link: link, thumbnail: thumbnail, description: description, published: published };
  } catch (error) {
    console.error('[Social Feed] Failed to parse YouTube feed:', error);
    return null;
  }
}

async function fetchSubstackLatest(count) {
  if (!count) count = 3;
  var feedUrl = SOCIAL_CONFIG.substack.publicationUrl + '/feed';
  var xml = await fetchWithCache(feedUrl, 'dp_substack_feed');

  if (!xml) return [];

  try {
    var parser = new DOMParser();
    var doc = parser.parseFromString(xml, 'text/xml');
    var items = doc.querySelectorAll('item');

    var results = [];
    var list = Array.from(items).slice(0, count);
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var descEl = item.querySelector('description');
      var rawDesc = descEl ? descEl.textContent : '';
      var cleanDesc = rawDesc.replace(/<[^>]*>/g, '').substring(0, 150);
      if (rawDesc.length > 150) cleanDesc = cleanDesc + '...';

      results.push({
        title: item.querySelector('title') ? item.querySelector('title').textContent : '',
        link: item.querySelector('link') ? item.querySelector('link').textContent : '',
        pubDate: item.querySelector('pubDate') ? item.querySelector('pubDate').textContent : '',
        description: cleanDesc,
        image: item.querySelector('enclosure') ? item.querySelector('enclosure').getAttribute('url') : '',
      });
    }
    return results;
  } catch (error) {
    console.error('[Social Feed] Failed to parse Substack feed:', error);
    return [];
  }
}

function renderYouTubeCard(video, containerId) {
  var container = document.getElementById(containerId);
  if (!container || !video) return;

  var date = '';
  if (video.published) {
    var d = new Date(video.published);
    date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  var desc = video.description ? video.description.substring(0, 120) : '';
  if (video.description && video.description.length > 120) desc = desc + '...';

  container.outerHTML = '<a id="' + containerId + '" href="' + video.link + '" target="_blank" rel="noopener noreferrer" class="md:col-span-8 row-span-2 relative group overflow-hidden border border-outline-variant/20 bg-surface-container reveal visible block" data-delay="100">' +
    '<img alt="' + video.title + '" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale" src="' + video.thumbnail + '" loading="lazy"/>' +
    '<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>' +
    '<div class="absolute bottom-0 left-0 p-8">' +
    '<span class="inline-block bg-secondary text-on-secondary px-3 py-1 font-label-bold text-caption uppercase mb-4">Latest Video' + (date ? ' &middot; ' + date : '') + '</span>' +
    '<h3 class="font-headline-md text-headline-md text-on-surface uppercase mb-2">' + video.title + '</h3>' +
    (desc ? '<p class="font-body-md text-body-md text-on-surface-variant max-w-md">' + desc + '</p>' : '') +
    '</div>' +
    '</a>';
}

function renderYouTubeMessagesCard(video, containerId) {
  var container = document.getElementById(containerId);
  if (!container || !video) return;

  var desc = video.description ? video.description.substring(0, 120) : '';
  if (video.description && video.description.length > 120) desc = desc + '...';

  var inner = container.querySelector('.relative.z-20:last-of-type') || container.querySelector('div.relative.z-20');
  if (!inner) return;

  var h2 = inner.querySelector('h2');
  if (h2) h2.textContent = video.title;

  var p = inner.querySelector('p');
  if (p && desc) p.textContent = desc;

  var linkEl = container;
  if (linkEl.tagName === 'A') {
    linkEl.href = video.link;
  }

  var img = container.querySelector('img');
  if (img) img.src = video.thumbnail;
}

function renderSubstackPosts(posts, containerId) {
  var container = document.getElementById(containerId);
  if (!container || posts.length === 0) return;

  var html = '<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-12 reveal visible">Latest from Substack</h2>';
  html += '<div class="flex flex-col border-t border-outline-variant/20">';

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var date = '';
    if (post.pubDate) {
      var d = new Date(post.pubDate);
      date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    html += '<a href="' + post.link + '" target="_blank" rel="noopener noreferrer" class="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-outline-variant/20 hover:bg-surface-variant/10 transition-colors px-4 -mx-4 reveal visible" data-delay="' + ((i + 1) * 100) + '">' +
      '<div class="flex flex-col gap-2">' +
      '<span class="font-label-bold text-label-bold text-tertiary uppercase">' + date + '</span>' +
      '<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">' + post.title + '</h3>' +
      '</div>' +
      '<div class="mt-4 md:mt-0 flex items-center gap-4 text-on-surface-variant">' +
      '<span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>' +
      '</div>' +
      '</a>';
  }

  html += '</div>';
  container.innerHTML = html;
}

function renderSpotifyEmbed(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  if (SOCIAL_CONFIG.spotify.embedUrl.indexOf('YOUR_') !== -1) return;

  container.innerHTML = '<div class="md:col-span-4 bg-surface-container group border border-outline-variant/20 relative overflow-hidden min-h-[400px] flex flex-col justify-between reveal visible" data-delay="200">' +
    '<div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>' +
    '<div class="relative z-20 flex justify-between items-start w-full p-8 pb-0">' +
    '<span class="inline-block bg-secondary text-on-secondary font-label-bold text-label-bold uppercase px-3 py-1">Audio</span>' +
    '<span class="material-symbols-outlined text-4xl text-secondary">graphic_eq</span>' +
    '</div>' +
    '<div class="relative z-20 p-8 pt-4">' +
    '<h2 class="font-headline-md text-headline-md text-on-surface uppercase mb-4">Worship Playlists</h2>' +
    '<iframe src="' + SOCIAL_CONFIG.spotify.embedUrl + '" width="100%" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="rounded-lg"></iframe>' +
    '</div>' +
    '</div>';
}

async function initSocialFeeds() {
  var youtubeVideo = await fetchYouTubeLatest();
  if (youtubeVideo) {
    renderYouTubeCard(youtubeVideo, 'youtube-latest');
    renderYouTubeMessagesCard(youtubeVideo, 'youtube-messages');
  }

  var substackPosts = await fetchSubstackLatest(3);
  if (substackPosts.length > 0) {
    renderSubstackPosts(substackPosts, 'substack-latest');
  }

  renderSpotifyEmbed('spotify-embed');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSocialFeeds);
} else {
  initSocialFeeds();
}
