import {
  defineTheme,
  directory,
  group,
  link,
  social,
} from "@neato/guider/theme";
import { NextSeo } from "next-seo";

export default defineTheme({
  contentFooter: {
    editRepositoryBase: "https://github.com/watchlonelil/docs/blob/main",
    socials: [social.discord("https://watch.lonelil.com/discord")],
  },
  settings: {
    logo: () => (
      <span className="gd-text-base gd-font-bold gd-text-textHeading">
        watch.lonelil.com
      </span>
    ),
  },

  meta: (pageMeta) => (
    <NextSeo
      {...{
        title: `${
          pageMeta.title ?? "For all your movie and TV show needs"
        } • watch.lonelil.com`,
        description:
          pageMeta.description ??
          "watch.lonelil.com is your one-stop destination for free movies, anime, TV shows, and Live TV. With a vast collection of content and easy-to-use interface, you'll never run out of entertainment options.",
        openGraph: {
          title: `${
            pageMeta.title ?? "For all your movie and TV show needs"
          } • watch.lonelil.com`,
          description:
            pageMeta.description ??
            "watch.lonelil.com is your one-stop destination for free movies, anime, TV shows, and Live TV. With a vast collection of content and easy-to-use interface, you'll never run out of entertainment options.",
        },
        additionalLinkTags: [
          {
            href: "https://cdn.jsdelivr.net/gh/watchlonelil/favicon@latest/ios/512.png",
            rel: "icon",
            type: "image/png",
          },
        ],
      }}
    />
  ),
  directories: [
    directory("main", {
      sidebar: [
        link("Home", "/", { icon: "lucide:home" }),
        group("Extension", [
          link("Introduction", "/extension/introduction"),
          link("Installation", "/extension/installation"),
          link("Status", "/extension/status"),
        ]),
      ],
    }),
  ],
});
