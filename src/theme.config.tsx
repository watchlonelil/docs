import { defineTheme, directory, group, link } from "@neato/guider/theme";

export default defineTheme({
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
