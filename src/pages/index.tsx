import * as React from "react"

// gatsby packages
import { type PageProps } from "gatsby"

// other packages
import { FaLinkedin, FaDev, FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

// components
import { IconLink } from "../components/Link"
import Seo from "../components/Seo"
import ClientLink from "../components/ClientLink"

// content
import { pastClients } from "../content/pastClients"
import { testimonials } from "../content/testimonials"
import TestimonialCard from "../components/TestimonialCard"
import Navbar from "../components/Navbar"

// assets
import seattleImage from "../assets/images/zhifei-zhou-QEob0Fp4rdg-unsplash.jpg"

const IndexPage: React.FC<PageProps> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0 font-sans">
      {/* NAVBAR */}
      <Navbar className="fixed z-10 bg-white shadow-md" />
      {/* HERO */}
      <div className="w-screen h-screen max-h-[600px] bg-black relative top-[32px]">
        <img src={seattleImage} className="w-full h-full absolute object-cover top-0 z-5" />
        <div className="w-full h-full z-8 bg-black absolute opacity-50" />
        <div className="absolute z-9 w-full h-full flex items-center">
          <div className="container max-w-[900px]">
            <div className="w-full max-w-[900px]">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">Seattle Retail Web Co.</h1>
              <h2 className="text-gray-200 text-2xl mb-5 max-w-[700px]">IT consulting and web development for restaurants, retail, non-profit, and small business</h2>
              <div>
                <a href="#services" className="px-8 py-3 bg-white text-black text-xl rounded-full border border-white hover:text-white hover:bg-black no-underline hover:no-underline">Explore &darr;</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* BODY */}
      <div className="container max-w-[900px] py-11">
        {/* SERVICES */}
        <article id="services mb-10">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="max-w-prose">I've worked with businesses of all sizes to grow web traffic, increase orders, and troubleshoot IT issues. My goal is to get everything working for you while removing the headache.</p>
          <div className="p-4 grid grid-cols-3 grid-rows-2 gap-2">
            <div>
              <h3>Benefit name</h3>
              <p>Short description</p>
            </div>
          </div>
        </article>
        {/* PAST CLIENTS */}
        <article className="mb-10">
          <h2 className="mb-3 font-bold">Past Clients:</h2>
          <ul className="pl-5">
            {pastClients.map((client, idx) => (
              <ClientLink
                hrefUrl={client.hrefUrl}
                label={client.label}
                key={idx}
              />
            ))}
          </ul>
        </article>
        {/* ABOUT SECTION */}
        <article>
          <h2 className="text-3xl font-semibold mt-10">
            James Hubert
          </h2>
          <div className="flex gap-x-4 text-xs mb-1">
            <span>Web Developer in Seattle, WA</span>
          </div>
          <div className="flex text-gray-400 text-xl gap-x-1 mb-10">
            <IconLink
              href="https://www.linkedin.com/in/jameswhubert/"
              icon={<FaLinkedin />}
            />
            <IconLink
              href="https://x.com/jameshubert_com"
              icon={<FaSquareXTwitter />}
            />
            <IconLink href="https://dev.to/jwhubert91" icon={<FaDev />} />
            <IconLink href="https://github.com/jwhubert91" icon={<FaGithub />} />
          </div>
          <div className="leading-loose mb-10">
            <p>US-based frontend web and mobile developer.</p>
            <p>I use React, NextJS, Gatsby, Tailwind, Flutter, and Webflow.</p>
            <p>
              Previously, I've worked for{" "}
              <a
                href="https://techcrunch.com/2021/07/21/ethos-picks-up-100m-at-a-2-7b-valuation-for-a-big-data-platform-to-improve-life-insurance-accessibility/"
                target="_blank"
              >
                Ethos
              </a>{" "}
              and{" "}
              <a
                href="https://www.forbes.com/sites/alexkonrad/2021/06/24/confluent-shares-jump-25-in-ipo-making-co-founders-new-cloud-computing-billionaires/"
                target="_blank"
              >
                Confluent
              </a>
              .
            </p>
            <p>
              If you have an upcoming project, please email me at
              hello@jameshubert.com
            </p>
          </div>
        </article>
        {/* TESTIMONIALS */}
        <article className="my-5 py-5 flex flex-col gap-y-4">
          <h2 className="mb-1 font-semibold">Testimonials:</h2>
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard {...testimonial} key={idx} />
          ))}
        </article>
        <article id="benefits"><h2>Benefits</h2></article>
        <article id="process"><h2>Process</h2></article>
        <article id="guarantee"><h2>Guarantee</h2></article>
      </div>
      <footer className="mx-auto w-full max-w-[700px] text-center text-sm mb-6">
        <span className="text-gray-400">&copy; James Hubert {currentYear}</span>
      </footer>
    </main>
  )
}

export default IndexPage

{/* CURRENT PROJECT(S) */ }
{/* <article className="leading-loose mb-10">
          <h2 className="mb-1 font-semibold">Current Passion:</h2>
          <p>
            Building{" "}
            <a href="https://tryshopii.com" target="_blank">
              tryshopii.com
            </a>
            , an app for consumers to shop from local stores and reserve items
            for pickup. It's built with Flutter, NextJS, and Firebase.
          </p>
        </article> */}

export const Head = () => <Seo />
