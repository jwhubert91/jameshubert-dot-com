import React from "react"
import { HiOutlineCursorArrowRays } from "react-icons/hi2"
import { FaArrowRight } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="flex justify-between py-3 px-6 items-center">
      <div className="flex gap-x-2 animated-text">
        <HiOutlineCursorArrowRays size="2em" className="animated-text" />
        <h1 className="flex flex-col items-end">
          <span className="text-2xl font-semibold">James Hubert</span>
          <span className="text-xxs">Frontend Web Developer</span>
        </h1>
      </div>
      <div className="flex gap-x-8 items-center">
        <a href="#services" className="hover:text-gray-400">
          Services
        </a>
        <a href="#work" className="hover:text-gray-400">
          Work
        </a>
        <a href="#contact" className="btn btn-animated">
          Contact
          <FaArrowRight />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
