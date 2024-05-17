import React from "react"
import { FaArrowRight, FaPhone } from "react-icons/fa"

function Navbar({ className = "" }) {
  return (
    <nav className={`flex justify-between py-3 px-6 items-center ${className}`}>
      <div className="flex gap-x-2 animated-text">
        <div>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "2em" }}
          >
            <path
              d="M13.172 5.717l2.71-1.297.432.902-2.865 1.372zm.203-4.301l-.943-.333-1.028 2.915.872.535zm-9.219 8.616l.432.902 2.865-1.37-.587-.829zM6.978 2.03L8.06 4.291l.902-.431L7.88 1.599zm-.342 4.25L3.72 5.252l-.332.943 3.117 1.1zM21.813 15H16.36l3.032 6.049-3.94 1.981-3.106-6.152L9 21.462V5.65zm-7.074-1h4.007L10 7.618v10.777l2.501-3.427 3.393 6.72 2.155-1.084z"
              fill="currentColor"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </div>
        <h1 className="flex flex-col items-end">
          <span className="text-xl font-semibold">James Hubert</span>
          <span className="text-xxs">Frontend Web Developer</span>
        </h1>
      </div>
      <div className="flex gap-x-8 items-center">
        {/* <a href="#services" className="hover:text-gray-400">
          Services
        </a>
        <a href="#work" className="hover:text-gray-400">
          Work
        </a> */}
        <a
          href="tel:646-653-9881"
          className="hover:text-gray-400 flex items-center gap-x-2"
        >
          <FaPhone />
          1-646-653-9881
        </a>
        <a
          href="#contact"
          className="btn btn-sm btn-animated transition-all duration-300 hover:scale-110"
        >
          Contact
          <FaArrowRight />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
