import React from "react"
import { TestimonialProps } from "../content/testimonials"
import { RiDoubleQuotesL } from "react-icons/ri"

interface TestimonialCardProps extends TestimonialProps {}

const TestimonialCard = ({
  quote,
  author,
  authorTitle,
  authorCompany,
}: TestimonialCardProps) => {
  return (
    <div className="card w-full glass shadow-xl">
      <div className="card-body">
        <h3 className="mb-5 inline">{quote}</h3>
        <div className="w-full flex flex-col items-end text-sm">
          <p className="font-bold">{author}</p>
          <p>{authorTitle}</p>
          <p>{authorCompany}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
