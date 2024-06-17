import React from "react"
import { PastClientProps } from "../content/pastClients"

interface ClientLinkProps extends PastClientProps {}

const ClientLink = ({ hrefUrl = "", label = "label" }: ClientLinkProps) => {
  return (
    <li>
      <a href={hrefUrl} target="_blank">
        {label}
      </a>
    </li>
  )
}

export default ClientLink
