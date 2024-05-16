import React, { useState } from "react"

// packages
import emailjs from "@emailjs/browser"

// components
import TextInput from "./TextInput"
import TextArea from "./TextArea"

const ContactForm = ({ className = "" }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    console.log({ email, name, message })
  }

  return (
    <div className={`container mb-5 ${className}`}>
      <div className="flex flex-col gap-y-3 max-w-[50%] mx-auto">
        <h3 className="text-2xl mb-10 font-homemade-apple text-white">
          Send me an email...
        </h3>
        <TextInput
          inputType="email"
          inputName="email"
          placeholderText="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          inputType="text"
          inputName="name"
          placeholderText="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          inputType="phone"
          inputName="phone"
          placeholderText="Phone number"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholderText="Please provide a few details about your project"
          inputName="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="btn btn-neutral btn-block transition-all duration-300 hover:scale-105 text-white"
          onClick={(e) => handleSubmit(e)}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ContactForm
