import React, { useState } from "react"
import TextInput from "./TextInput"
import TextArea from "./TextArea"

const ContactForm = ({}) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className="container text-black">
      <h3 className="text-2xl mb-10 italic">Send me an email...</h3>
      <div className="mb-5">
        <div className="grid gap-x-3 grid-cols-1 sm:grid-cols-2 mb-5">
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
        </div>
        <TextArea
          inputBorderClassName="focus:border-primary"
          placeholderText="Please provide a few details about your project"
          inputName="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        className="btn btn-neutral btn-block text-white hover:text-secondary"
        // disabled={email && name && message ? false : true}
      >
        Send
      </button>
    </div>
  )
}

export default ContactForm
