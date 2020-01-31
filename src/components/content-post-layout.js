import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"


export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <React.Fragment>
        <tr style={{flex: 1, flexDirection:'row', flexWrap:'wrap', justifyContent: 'flex-start', width:900}}>
      <Link to="#">
         <td style={{fontWeight: 0.3, fontSize:24, float:'left'}}>prev</td>
      </Link>
      <Link to="#">
         <td style={{fontWeight: 0.3, fontSize:24, float:'center'}}>back to blog</td>
      </Link>
      <Link to="#">
         <td style={{fontWeight: 0.3, fontSize:24, float:'right'}}>prev</td>
      </Link>
      </tr>
      </React.Fragment>
      <h1>{mdx.frontmatter.title}</h1>
      <p style={{color:"#1ca086", fontSize: 20}}>
        {mdx.frontmatter.date}, topic: <i>{mdx.frontmatter.topic}</i>
      </p>
      
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title,
        slug,
        date,
        topic,
        lede
      }
    }
  }
`