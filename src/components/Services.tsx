import React, { ReactElement } from "react"

// components
import { FaMobileAlt, FaStore } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"

const Services = ({ className = "" }) => {
  return (
    <div className={`container ${className}`} id="#services">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-x-12">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            iconElement={service.iconElement}
            serviceName={service.serviceName}
            serviceDescription={service.serviceDescription}
          />
        ))}
      </div>
      <div className="w-full py-5"></div>
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
      className="card bg-white text-black shadow-xl flex flex-col text-center justify-between gap-y-4 hover:cursor-pointer group"
      href="#contact"
    >
      <div className="flex flex-col items-center justify-start gap-y-5">
        <figure className="px-10 pt-10 text-4xl">{iconElement}</figure>
        <h2 className="card-title text-xl lg:text-2xl max-w-[90%]">
          {serviceName}
        </h2>
      </div>
      <div className="px-4 pb-4 items-center text-center gap-y-4 flex flex-col flex-1 justify-end">
        <p className="text-xs">{serviceDescription}</p>
        <div className="btn btn-block btn-neutral text-white group-hover:bg-gray-700">
          Contact
        </div>
      </div>
    </a>
  )
}

// service card data
const services: ServiceCardProps[] = [
  {
    iconElement: <RiComputerLine />,
    serviceName: "React Development",
    serviceDescription:
      "New website builds and ongoing maintenance for custom React, Gatsby, NextJS, Remix and full-stack applications.",
  },
  {
    iconElement: <FaMobileAlt />,
    serviceName: "Mobile Apps",
    serviceDescription:
      "Mobile application builds and maintenance in Flutter, Thunkable, and React Native.",
  },
  {
    iconElement: <FaStore />,
    serviceName: "Small Business Websites",
    serviceDescription:
      "Stores, restaurants, services businesses and other organizations each has its own set of tools to best serve their customers.",
  },
]
