import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = (props) => (
  <Layout location="/blog/">
    <SEO title="blog" />
    <h1>blog</h1>
    <p>under construction...</p>
    <ul>
      <li><Link to='/blog/blog-post1/'>Blog post 1</Link></li>
      <li><Link to='/blog/blog-post2/'>Blog post 2</Link></li>
    </ul>
    <p>go here? </p>
  </Layout>
)

export default Blog