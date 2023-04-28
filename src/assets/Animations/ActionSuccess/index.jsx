import React, { useState } from "react";
import Lottie from "react-lottie-player";
import success_animation from "./success.json";
import '../animation_styles.css'

export default function ActionSuccess() {
  const [animation, setAnimation] = useState(true);

  return (
    <Lottie
      className="animated-successs"
      loop={false}
      animationData={success_animation}
      play={animation}
      style={{ width: 200, height: 200 }}
    />
  );
}
