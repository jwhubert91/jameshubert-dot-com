import React from "react"
import { FaArrowRight } from "react-icons/fa"

interface LinkProps {
  className?: string
  label: string
  isArrowShown?: boolean
}

export const AnimatedLink = ({
  className = "",
  label,
  isArrowShown = true,
}: LinkProps) => {
  return (
    <a
      href="#contact"
      className={`btn btn-animated hover:border hover:border-white ${className}`}
    >
      {label}
      {isArrowShown && <FaArrowRight />}
    </a>
  )
}
