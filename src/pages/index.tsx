import * as React from "react"
import type { HeadFC, PageProps, Link } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0 bg-black text-white">
      <nav className="flex justify-between py-3 px-5">
        <h1 className="">Logo</h1>
        <div className="flex gap-x-4">
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
