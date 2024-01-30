import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "watch.lonelil.com docs",
  description: "Docs for watch.lonelil.com",

  srcDir: "docs",
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Extension", link: "/extension/introduction" },
    ],

    sidebar: [
      {
        text: "Extension",
        items: [
          { text: "Introduction", link: "/extension/introduction" },
          { text: "Installation", link: "/extension/installation" },
        ],
      },
    ],

    socialLinks: [
      { icon: "discord", link: "https://watch.lonelil.com/discord" },
      { icon: "github", link: "https://github.com/watchlonelil/docs" },
    ],

    search: {
      provider: "local",
    },
  },

  head: [
    [
      "script",
      {
        defer: "",
        src: "https://wink.lonelil.com/js/script.js",
        "data-domain": "docs.watch.lonelil.com",
      },
    ],
    [
      "meta",
      {
        name: "darkreader-lock",
      },
    ],
  ],
});
