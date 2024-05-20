import React, { ReactElement } from "react"

// components
import { FaMobileAlt } from "react-icons/fa"
import { FaCode } from "react-icons/fa6"
import { TiShoppingCart } from "react-icons/ti"

const Services = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-x-12 my-10">
      {services.map((service, idx) => (
        <ServiceCard
          key={idx}
          iconElement={service.iconElement}
          serviceName={service.serviceName}
          serviceDescription={service.serviceDescription}
        />
      ))}
    </div>
  )
}

export default Services

// service card
interface ServiceCardProps {
  iconElement: ReactElement
  serviceName: String
  serviceDescription: String
}

function ServiceCard({
  iconElement,
  serviceName = "",
  serviceDescription = "",
}: ServiceCardProps) {
  return (
    <a
      className="card bg-white text-black shadow-xl border border-accent flex flex-col text-center justify-between gap-y-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
      href="#contact"
    >
      <div className="flex flex-col items-center justify-start gap-y-3">
        <figure className="px-10 pt-10 text-4xl">{iconElement}</figure>
        <h2 className="card-title text-lg lg:text-xl">{serviceName}</h2>
      </div>
      <div className="px-4 pb-4 items-center text-center gap-y-4 flex flex-col flex-1 justify-end">
        <p className="text-xs">{serviceDescription}</p>
        <div className="btn btn-block btn-secondary">Contact</div>
      </div>
    </a>
  )
}

// service card data
const services: ServiceCardProps[] = [
  {
    iconElement: <FaCode />,
    serviceName: "Development & Maintenance",
    serviceDescription:
      "New website builds and ongoing maintenance for custom React, Gatsby, NextJS, Remix and full-stack applications.",
  },
  {
    iconElement: <FaMobileAlt />,
    serviceName: "Mobile Apps",
    serviceDescription:
      "Mobile applications builds and maintenance in Flutter, Bubble, and React Native.",
  },
  {
    iconElement: <TiShoppingCart />,
    serviceName: "Small Business Websites",
    serviceDescription:
      "Stores, restaurants, services businesses and other organizations each require specific tools.",
  },
]
