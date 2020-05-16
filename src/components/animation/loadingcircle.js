import React, { useState } from "react"
import Lottie from "react-lottie"
import * as animationData from "./bluecircle.json"

export default function LoadingCircle(props) {
  const [isStopped, setStopped] = useState(false)
  const [isPaused, setPaused] = useState(false)

  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  }
  return (
    <div>
      {console.log(animationData)}
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      ></Lottie>
      {/* <button style={buttonStyle} onClick={setStopped(true)}> */}
      {/* Stop
      </button> */}
    </div>
  )
}
