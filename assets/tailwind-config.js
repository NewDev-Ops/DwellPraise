tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#c8c6c5",
        "background": "#121414",
        "on-tertiary": "#522300",
        "error": "#ffb4ab",
        "on-tertiary-container": "#b86937",
        "on-error": "#690005",
        "surface-container": "#1e2020",
        "surface-variant": "#333535",
        "surface-container-high": "#282a2b",
        "surface-bright": "#38393a",
        "tertiary-fixed-dim": "#ffb68c",
        "secondary-fixed-dim": "#a1d494",
        "on-error-container": "#ffdad6",
        "tertiary-container": "#240b00",
        "surface": "#121414",
        "primary-fixed-dim": "#c8c6c5",
        "surface-container-lowest": "#0c0f0f",
        "on-primary-container": "#7e7d7d",
        "on-secondary-fixed": "#002201",
        "inverse-primary": "#5f5e5e",
        "secondary-fixed": "#bcf0ae",
        "on-primary-fixed-variant": "#474646",
        "surface-dim": "#121414",
        "outline": "#8e9192",
        "inverse-on-surface": "#2f3131",
        "tertiary-fixed": "#ffdbc9",
        "inverse-surface": "#e2e2e2",
        "surface-container-highest": "#333535",
        "on-secondary": "#0a3909",
        "on-primary-fixed": "#1c1b1b",
        "surface-container-low": "#1a1c1c",
        "on-tertiary-fixed": "#321200",
        "outline-variant": "#444748",
        "on-secondary-container": "#90c283",
        "secondary-container": "#23501e",
        "primary": "#c8c6c5",
        "on-tertiary-fixed-variant": "#743503",
        "primary-fixed": "#e5e2e1",
        "on-surface-variant": "#c4c7c7",
        "tertiary": "#ffb68c",
        "on-secondary-fixed-variant": "#23501e",
        "on-surface": "#e2e2e2",
        "on-primary": "#313030",
        "error-container": "#93000a",
        "primary-container": "#121212",
        "secondary": "#a1d494",
        "on-background": "#e2e2e2"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "1.5rem",
        "block-gap-lg": "6rem",
        "block-gap-sm": "2rem",
        "margin-desktop": "4rem",
        "margin-mobile": "1rem"
      },
      fontFamily: {
        "body-md": ["DM Sans"],
        caption: ["DM Sans"],
        "headline-xl": ["DM Sans"],
        "headline-lg": ["DM Sans"],
        "headline-md": ["DM Sans"],
        "body-lg": ["DM Sans"],
        "headline-lg-mobile": ["DM Sans"],
        "label-bold": ["DM Sans"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "headline-xl": ["80px", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.1", fontWeight: "700" }],
        "label-bold": ["14px", { lineHeight: "1.2", fontWeight: "700" }]
      }
    }
  }
}
