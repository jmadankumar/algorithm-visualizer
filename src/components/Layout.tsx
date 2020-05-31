import React, { ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  )
}
