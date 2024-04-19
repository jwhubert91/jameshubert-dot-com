import React from "react"

function Navbar() {
  return (
    <nav className="flex justify-between py-3 px-6 items-center">
      <h1 className="flex flex-col">
        <span className="text-2xl font-semibold">James Hubert</span>
        <span className="text-xs">Frontend Web Developer</span>
      </h1>
      <div className="flex gap-x-8 items-center">
        <a href="#" className="hover:text-gray-400">
          Reviews
        </a>
        <a href="#" className="hover:text-gray-400">
          Work
        </a>
        <a href="#" className="btn btn-secondary">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
