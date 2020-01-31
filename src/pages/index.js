import React from "react"
import { Link } from "gatsby"
import typography from "../utils/typography"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default (props) => (
  <Layout>
    <SEO title="im.chrisp.cc" />
    <h1>hey, i'm chris p :)</h1>
    <p>...and this is my under construction site. I'll be trying to keep track of the projects I'm involved in</p>
    <p>come back another time</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <p>Go to <Link to='/test/'>this test .mdx page</Link></p>
    <p>Come visit my <a href="https://github.com/chrisp1877">github page</a> maybe?</p>
    </div>
  </Layout>
)

