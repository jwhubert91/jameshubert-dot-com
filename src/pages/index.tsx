import * as React from "react"
import type { HeadFC, PageProps, Link } from "gatsby"
import Navbar from "../components/Navbar"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0">
      <Navbar />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
