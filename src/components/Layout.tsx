import React, { ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen bg-gray-200 overflow-hidden">
      <div className="w-full h-full overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}
