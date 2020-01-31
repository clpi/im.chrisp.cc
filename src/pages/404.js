import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>my bad. four oh four.</h1>
    <p>nope. couldn't find it.</p>
  </Layout>
)

export default NotFoundPage
