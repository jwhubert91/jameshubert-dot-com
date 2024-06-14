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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col w-full min-h-screen m-0 p-0 font-sans pb-11">
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
        <article className="leading-loose mb-10">
          <p className="mb-1 font-semibold">Current Passion:</p>
          <p>
            Building{" "}
            <a href="https://tryshopii.com" target="_blank">
              tryshopii.com
            </a>
            , an app for consumers to shop from local stores in their community
            and reserve for pickup. It's built with Flutter, NextJS, and
            Firebase.
          </p>
        </article>
        <article>
          <p className="mb-1 font-semibold">Past Clients:</p>
          <ul className="pl-5">
            <li>
              <a href="https://mainspringenergy.com" target="_blank">
                Mainspring Energy
              </a>
            </li>
            <li>
              <a href="https://rationale-design.com" target="_blank">
                Rationale Design
              </a>
            </li>
            <li>
              <a href="https://cuberg.net" target="_blank">
                Cuberg
              </a>
            </li>
            <li>
              <a href="https://alveotechnologies.com" target="_blank">
                Alveo Technologies
              </a>
            </li>
            <li>
              <a href="https://www.maryannunger.com/" target="_blank">
                Mary Ann Unger Estate
              </a>
            </li>
            <li>
              <a href="https://www.soleiltoujours.com/" target="_blank">
                Soleil Toujours
              </a>
            </li>
            <li>
              <a href="https://www.gryphon-agency.com/" target="_blank">
                Gryphon Agency
              </a>
            </li>
            <li>
              <a href="https://tunnel7.com" target="_blank">
                Tunnel 7
              </a>
            </li>
            <li>
              <a href="https://montlakere.com" target="_blank">
                Montlake Residential
              </a>
            </li>
            <li>
              <a href="https://boosballoons.com" target="_blank">
                Boos Balloons
              </a>
            </li>
            <li>
              <a href="https://www.btv.aero/" target="_blank">
                Burlington Airport
              </a>
            </li>
            <li>
              <a href="https://www.berkshirechoral.org/" target="_blank">
                Berkshire Choral
              </a>
            </li>
            <li>
              <a href="https://winningwriters.com/" target="_blank">
                Winning Writers
              </a>
            </li>
            <li>
              <a href="https://goreplace.org/" target="_blank">
                Gore Place
              </a>
            </li>
            <li>
              <a href="https://gilburgleadership.com/" target="_blank">
                Gilburg Leadership
              </a>
            </li>
            <li>
              <a href="https://occserv.com/" target="_blank">
                Occupational Services Inc
              </a>
            </li>
            <li>
              <a href="https://rknewyorkwebdesign.com/" target="_blank">
                RK Software
              </a>
            </li>
          </ul>
        </article>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <Seo />
