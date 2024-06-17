import * as React from "react"

// gatsby packages
import type { PageProps } from "gatsby"

// other packages
import { FaLinkedin, FaDev, FaGithub, FaPhoneAlt } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

// components
import { IconLink } from "../components/Link"
import Seo from "../components/Seo"
import ClientLink from "../components/ClientLink"

// content
import { pastClients } from "../content/pastClients"
import { testimonials } from "../content/testimonials"
import TestimonialCard from "../components/TestimonialCard"

const IndexPage: React.FC<PageProps> = () => {
  const currentYear = new Date().getFullYear()

  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0 font-sans">
      <nav className="flex justify-center sm:justify-end pr-2 pt-2 mx-auto w-full pb-6">
        <a
          className="text-gray-800 flex items-center gap-x-1 text-sm mr-3 hover:no-underline"
          href="mailto:hello@jameshubert.com"
        >
          <MdEmail />
          hello@jameshubert.com
        </a>
        <a
          className="text-gray-800 flex items-center gap-x-1 text-sm hover:no-underline"
          href="tel:1-646-653-9881"
        >
          <FaPhoneAlt />
          {`(646)-653-9881`}
        </a>
      </nav>
      <div className="container max-w-[700px] pb-11">
        <h1 className="text-3xl font-semibold mt-10">
          <a href="https://www.linkedin.com/in/jameswhubert/" target="_blank">
            James Hubert
          </a>
        </h1>
        <div className="flex gap-x-4 text-xs mb-1">
          <span>📍 Remote / Brooklyn</span>
          <span>🏠 Seattle, WA</span>
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
        <article className="leading-loose mb-10">
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
        </article>
        {/* CURRENT PROJECT(S) */}
        <article className="leading-loose mb-10">
          <h2 className="mb-1 font-semibold">Current Passion:</h2>
          <p>
            Building{" "}
            <a href="https://tryshopii.com" target="_blank">
              tryshopii.com
            </a>
            , an app for consumers to shop from local stores and reserve items
            for pickup. It's built with Flutter, NextJS, and Firebase.
          </p>
        </article>
        {/* PAST CLIENTS */}
        <article className="mb-10">
          <h2 className="mb-1 font-semibold">Past Clients:</h2>
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
        {/* TESTIMONIALS */}
        <article className="my-5 py-5 flex flex-col gap-y-4">
          <h2 className="mb-1 font-semibold">Testimonials:</h2>
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard {...testimonial} key={idx} />
          ))}
        </article>
      </div>
      <footer className="mx-auto w-full max-w-[700px] text-center">
        <span className="text-gray-400">&copy; James Hubert {currentYear}</span>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo />
