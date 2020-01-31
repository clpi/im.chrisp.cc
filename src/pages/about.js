import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props) => (
  <Layout location="/about/">
    <SEO title="about" />
    <h1>about</h1>
    <p>from seattle, recent UW grad, likes materials science, data science, linux, statistics, philosophy, strange music...</p>
  </Layout>
)

export default About
