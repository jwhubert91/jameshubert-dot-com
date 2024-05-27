import * as React from "react"

// gatsby packages
import type { HeadFC, PageProps } from "gatsby"

// components
import Navbar from "../components/Navbar"
import StickyTwitterLink from "../components/StickyTwitterLink"
import ContactForm from "../components/ContactForm"
import Services from "../components/Services"

// assets
import headshotImage from "../assets/images/headshot_plant.jpeg"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0">
      {/* navbar */}
      <Navbar className="flex" />
      {/* hero */}
      <div className="container min-h-[80vh] 2xl:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-11">
        <div className="flex flex-col max-w-[450px] mx-auto sm:max-w-none justify-center">
          <h1 className="text-3xl md:text-5xl md:font-semibold mb-8">
            Web & Mobile Developer for React Applications
          </h1>
          <h4 className="text-gray-400">
            <span className="text-primary">On-call development</span> for{" "}
            <span className="text-accent">web & mobile,</span> and{" "}
            <span className="text-warning">technical support</span> from an
            experienced, US based frontend engineer. If you have an upcoming
            project I'd like to hear from you.
          </h4>
        </div>
        <div className="flex mt-5 md:mt-0 items-center justify-center order-first md:order-last">
          <div className="w-full max-w-[250px] md:max-w-[350px] aspect-square relative">
            <img src={headshotImage} className="absolute rounded-full" />
          </div>
        </div>
      </div>
      {/* services */}
      <Services />
      {/* testimonials */}
      {/* technologies used */}
      {/* about */}
      {/* portfolio */}
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
