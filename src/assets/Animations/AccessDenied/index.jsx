import React, { useState } from "react";
import Lottie from "react-lottie-player";
import access_denied from "./access-denied.json";
import '../animation_styles.css'

export default function AccessDenied() {
  const [animation, setAnimation] = useState(true);

  return (
    <Lottie
      className="animated-deniedAccess"
      loop={false}
      animationData={access_denied}
      play={animation}
      style={{ width: 200, height: 200 }}
    />
  );
}
