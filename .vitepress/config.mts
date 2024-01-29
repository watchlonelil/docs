import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "watch.lonelil.com docs",
  description: "Docs for watch.lonelil.com",

  srcDir: "src",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/watchlonelil/docs" },
    ],
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
  ],
});
