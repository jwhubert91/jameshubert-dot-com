import React from "react"
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex justify-center sm:justify-end pr-2 py-2 mx-auto w-full fixed bg-white z-50">
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
  )
}

export default Navbar
