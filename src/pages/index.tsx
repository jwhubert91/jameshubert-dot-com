import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/Navbar"
import RotatingCircle from "../components/RotatingCircle"
import StickyTwitterLink from "../components/StickyTwitterLink"
import ContactForm from "../components/ContactForm"

// next up: contact font - https://fonts.google.com/specimen/Alike+Angular?query=Alike&sort=popularity
// then: contact email - https://nodemailer.com/about/

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0">
      {/* navbar */}
      <Navbar className="hidden sm:flex" />
      {/* hero */}
      <div className="container min-h-screen md:min-h-[90vh] 2xl:min-h-[60vh] grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center mb-5">
          <h2 className="text-3xl sm:text-5xl md:font-semibold mb-4">
            Web Development
            <br /> as-a-service
          </h2>
          <h3 className="text-xl mb-6 text-gray-400">
            React, NextJS, Gatsby, Flutter, Webflow, and Shopify development on
            demand
          </h3>
          <h4>
            <span className="text-primary">On-call development</span> for{" "}
            <span className="text-accent">web & mobile,</span> and{" "}
            <span className="text-warning">technical support</span> from an
            experienced, US based frontend engineer. If you have an upcoming
            project I'd like to hear from you.
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <RotatingCircle />
        </div>
      </div>
      {/* testimonials */}
      {/* <div>services</div>
      <div>work</div> */}
      {/* contact */}
      <div className="bg-primary min-h-[400px] flex-1" id="contact">
        <ContactForm />
      </div>
      {/* texture footer */}
      <StickyTwitterLink />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
