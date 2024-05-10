import React from "react"

import { FaReact, FaNodeJs } from "react-icons/fa"
import { RiGatsbyFill, RiNextjsFill } from "react-icons/ri"
import { SiJavascript, SiTypescript, SiFlutter, SiRemix } from "react-icons/si"

const RotatingCircle = () => {
  const circleItems = []
  const divIcons = [
    <FaReact className="text-4xl text-gray-300" />,
    <FaNodeJs className="text-4xl text-orange-500" />,
    <RiGatsbyFill className="text-4xl text-yellow-500" />,
    <RiNextjsFill className="text-4xl text-green-500" />,
    <SiJavascript className="text-4xl text-blue-500" />,
    <SiTypescript className="text-4xl text-indigo-500" />,
    <SiFlutter className="text-4xl text-violet-500" />,
    <SiRemix className="text-4xl text-red-500" />,
  ]

  // Generate 8 divs with different positions
  for (let i = 0; i < 8; i++) {
    const angle = i * 45 + 22.5 // Angle in degrees for each div
    const x = Math.cos((angle * Math.PI) / 180) * 90 // Calculate x position
    const y = Math.sin((angle * Math.PI) / 180) * 90 // Calculate y position

    circleItems.push(
      <div
        key={i}
        className="circle-item"
        style={{
          left: `${x + 80}px`, // Adjust left position
          top: `${y + 80}px`, // Adjust top position
        }}
      >
        {divIcons[i]}
      </div>
    )
  }

  return <div className="circle-container">{circleItems}</div>
}

export default RotatingCircle
