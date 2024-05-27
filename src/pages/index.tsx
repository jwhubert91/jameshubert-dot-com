import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/Navbar"
// import RotatingCircle from "../components/RotatingCircle"
import StickyTwitterLink from "../components/StickyTwitterLink"
import ContactForm from "../components/ContactForm"
import Services from "../components/Services"

// next up: contact font - https://fonts.google.com/specimen/Alike+Angular?query=Alike&sort=popularity
// then: contact email - https://nodemailer.com/about/

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0">
      {/* navbar */}
      <Navbar className="hidden sm:flex" />
      {/* hero */}
      <div className="container min-h-[80vh] 2xl:min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 gap-x-11">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-6xl md:font-semibold mb-8">
            Custom Web Development for React Apps
          </h1>
          <h4 className="text-gray-400">
            <span className="text-primary">On-call development</span> for{" "}
            <span className="text-accent">web & mobile,</span> and{" "}
            <span className="text-warning">technical support</span> from an
            experienced, US based frontend engineer. If you have an upcoming
            project I'd like to hear from you.
          </h4>
        </div>
        <div className="flex items-center justify-end">
          <div className="w-full aspect-square rounded-full">
            <img src="../assets/images/headshot_plant.jpeg" />
          </div>
        </div>
      </div>
      {/* testimonials */}
      {/* services */}
      <Services className="" />
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
