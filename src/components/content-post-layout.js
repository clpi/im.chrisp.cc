import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../src/components/layout"
import PropTypes from "prop-types"
import Typography from "typography-theme-fairy-gates"
import SEO from "../../src/components/seo"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div style={{display:'inline',clear:'both'}}>
        <h1 style={{display: 'inline'}}>blog &nbsp;</h1>
        <Link to='/blog/' style={{display:'inline', backgroundImage:'none', fontSize: '25px'}}>
          back
        </Link>
        <Link to='/blog/' style={{display:'inline', backgroundImage:'none', fontSize: '25px', float:'right'}}>
          
        </Link>
      </div>


        <h3 style={{width:'100%', textAlign:'center', fontSize:'80px', paddingTop:'100px'}}>
          {mdx.frontmatter.title}
        </h3>
      <p style={{color:'#1ca086', fontSize:'30px', textAlign:'center', marginLeft:'5%', marginRight: '5%'}}>
        <i>{mdx.frontmatter.lede}</i>
      </p>
      <p style={{textAlign:'center', paddingBottom:'30px'}}>{mdx.frontmatter.date}</p>
      <br/>
      <div style={{marginLeft:'10%', marginRight: '10%'}}>
      <MDXRenderer>
        {mdx.body}
      </MDXRenderer>
      </div>

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
        date,
        topic,
        lede,
      }
    }
  }
`