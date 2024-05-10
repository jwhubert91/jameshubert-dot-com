import React from "react"

interface TextAreaProps {
  inputName: string
  placeholderText: string
  inputBorderClassName: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextArea = ({
  inputName = "",
  placeholderText = "Enter your text",
  inputBorderClassName = "",
  value = "",
  onChange,
}: TextAreaProps) => {
  return (
    <div className="relative">
      <textarea
        className={`w-full py-2 px-3 bg-transparent border-2 focus:outline-none transition-colors duration-300 border-black ${inputBorderClassName}`}
        placeholder={placeholderText}
        rows={4}
      />
      <style>
        {`
          textarea:focus {
            caret-color: green;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            50% {
              caret-color: transparent;
            }
          }
        `}
      </style>
    </div>
  )
}

export default TextArea
