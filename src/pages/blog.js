import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({data}) => {
  const { edges: posts } = data.allMdx
  return(
<   Layout location="/blog/">
      <SEO title="blog" />
      <h1>blog</h1>
      <p>under construction...</p>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={'blog/'+post.frontmatter.slug}>
              {post.frontmatter.title}
            </Link> ({post.frontmatter.date})
            <p>{post.frontmatter.lede}</p>
          </li>
        ))}
      </ul>
      <p>go here? </p>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date
            lede
            slug
          }
        }
      }
    }
  }
`
export default Blog