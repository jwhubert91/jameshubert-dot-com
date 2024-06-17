import React from "react"
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex justify-center sm:justify-end pr-2 mx-auto w-full fixed z-50">
      <div className="bg-white p-2 md:mt-1 rounded-full flex gap-x-2">
        <a
          className="text-gray-800 flex items-center gap-x-1 text-sm mr-3 hover:no-underline hover:text-gray-400"
          href="mailto:hello@jameshubert.com"
        >
          <MdEmail />
          hello@jameshubert.com
        </a>
        <a
          className="text-gray-800 flex items-center gap-x-1 text-sm hover:no-underline hover:text-gray-400"
          href="tel:1-646-653-9881"
        >
          <FaPhoneAlt />
          {`(646)-653-9881`}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
