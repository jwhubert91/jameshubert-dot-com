import React, { ReactElement } from "react"

interface IconLinkProps {
  href: string
  icon: ReactElement
  className?: string
}

export const IconLink = ({
  href = "",
  icon,
  className = "",
}: IconLinkProps) => {
  return (
    <a href={href} target="_blank" className={`link-secondary ${className}`}>
      {icon}
    </a>
  )
}
