const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-content-post-layout-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/components/content-post-layout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/chrisp/Projects/imchrispcc/src/pages/projects.js")))
}

