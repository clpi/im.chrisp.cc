import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = (props) => (
  <Layout location='/contact/'>
    <SEO title="contact" />
    <h1>contact</h1>
    <p>if for some reason you need to contact me right now, email me at im@chrisp.cc</p>
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

  </Layout>
)

export default Contact