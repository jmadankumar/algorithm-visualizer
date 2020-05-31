import React from "react"
import { graphql, Link } from 'gatsby';

export default function Home({ data }: { data: any }) {
  console.log(data)
  return (
    <div>
      <div>{data.site.siteMetadata.title}</div>
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
  }
`
