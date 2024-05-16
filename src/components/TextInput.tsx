import React from "react"

interface TextInputProps {
  inputType: string
  inputName: string
  placeholderText: string
  inputBorderClassName?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  inputType = "text",
  inputName = "",
  placeholderText = "Enter your text",
  inputBorderClassName = "",
  value = "",
  onChange,
}: TextInputProps) => {
  return (
    <div className="relative">
      <input
        type={inputType}
        className={`w-full py-2 px-3 bg-transparent border-b-2 border-dashed border-white focus:outline-none focus:border-black transition-colors duration-300 placeholder-gray-300 ${inputBorderClassName}`}
        placeholder={placeholderText}
        onChange={onChange}
      />
      <style>
        {`
          input:focus {
            caret-color: white;
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

export default TextInput
