import * as React from "react"
import type { HeadFC, PageProps, Link } from "gatsby"
import Navbar from "../components/Navbar"
import RotatingCircle from "../components/RotatingCircle"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0">
      <Navbar className="hidden md:flex" />
      <div className="container min-h-screen md:min-h-[90vh] 2xl:min-h-[60vh] grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl md:font-semibold mb-4">
            Web Development
            <br /> as-a-service
          </h2>
          <h3 className="text-2xl mb-6 text-gray-300">
            React, NextJS, and Gatsby development on demand
          </h3>
          <h4 className="text-medium">
            On-call web development and technical support from an experienced,
            US based frontend engineer. If you have an upcoming project I'd like
            to hear from you.
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <RotatingCircle />
        </div>
      </div>
      {/* <div>contact</div>
      <div>services</div>
      <div>work</div>
      <div>testimonials</div> */}
      <div className="bg-gray-300 min-h-[400px] flex-1 text-black">
        <div className="container">Send me an email...</div>
      </div>
      {/* <div className="container--full-width">texture footer</div> */}
      <a
        href="https://x.com/jameshubert_com"
        className="bg-white text-black rounded-tl-lg fixed bottom-0 right-0 text-sm px-2 py-1 hover:bg-gray-300"
      >
        by jameshubert_com
      </a>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
