const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-content-post-layout-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/components/content-post-layout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/.cache/dev-404-page.js"))),
  "component---content-posts-blog-1-mdx": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/content/posts/blog1.mdx"))),
  "component---content-posts-blog-2-mdx": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/content/posts/blog2.mdx"))),
  "component---content-posts-blog-3-mdx": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/content/posts/blog3.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/projects.js"))),
  "component---src-pages-test-mdx": hot(preferDefault(require("/home/chrisp/Projects/im.chrisp.cc/src/pages/test.mdx")))
}

