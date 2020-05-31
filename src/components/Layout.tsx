import React, { ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }: { children: ReactNode }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      {children}
    </div>
  )
}
