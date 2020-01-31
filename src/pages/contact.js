import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = (props) => (
  <Layout location='/contact/'>
    <SEO title="contact" />
    <h1>contact</h1>
    <p>if for some reason you need to contact me right now, email me at im@chrisp.cc</p>
  </Layout>
)

export default Contact