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
    <div className={`container text-black mb-5 grid grid-cols-2 ${className}`}>
      <div className="col-span-1 flex flex-col gap-y-3">
        <h3 className="text-2xl mb-10 italic">Send me an email...</h3>
        <TextInput
          inputType="email"
          inputName="email"
          placeholderText="Enter your email address"
          inputBorderClassName="focus:border-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          inputType="text"
          inputName="name"
          placeholderText="Full name"
          inputBorderClassName="focus:border-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          inputBorderClassName="focus:border-primary"
          placeholderText="Please provide a few details about your project"
          inputName="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="btn btn-neutral btn-block text-white hover:text-secondary"
          onClick={(e) => handleSubmit(e)}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ContactForm
