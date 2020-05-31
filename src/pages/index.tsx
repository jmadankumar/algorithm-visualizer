import React from "react"
import { graphql, Link } from "gatsby"
export default function Home({ data }: { data: any }) {
  console.log(data)
  return (
    <div>
      <div>{data.site.siteMetadata.title}</div>
      {data.allMarkdownRemark.edges.map(({ node }: { node: any }) => {
        return (
          <div key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          html
          id
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
