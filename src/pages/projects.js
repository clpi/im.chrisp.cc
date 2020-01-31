import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = (props) => (
  <Layout location="/projects/">
    <SEO title="projects" />
    <h1>projects</h1>
    <h4>this is where I will visually and interacitvely display projects i am/have been involved in</h4>
    <p>Here's what I'm currently involved in:</p>
    <ul>
      <li>GEMSEC UW full-stack web application development with React and FastAPI (Python)</li>
      <li>GEMSEC UW prediction of neuropeptide binding to graphene</li>
      <li>Technical producer at Impresys software corporation</li>
      <li>Untitled life-statistic learning/visualization full stack web app</li>
      <li>...a few other things yet to be named</li>
    </ul>
  </Layout>
)

export default Projects