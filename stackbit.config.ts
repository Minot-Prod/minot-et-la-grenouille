import { defineStackbitConfig } from "@netlify/visual-editor";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    {
      type: "filesystem",
      name: "Git CMS",
      path: "content",
      models: "*"
    }
  ],
  siteMap: () => ([
    { model: "PageLayout", urlPath: "/" },
    { model: "PageLayout", urlPath: "/{slug}" },
    { model: "PostLayout", urlPath: "/blog/{slug}" }
  ])
});
