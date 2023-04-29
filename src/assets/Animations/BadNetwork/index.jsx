import React, { useState } from "react";
import Lottie from "react-lottie-player";
import bad_network from "./bad-network.json";
import '../animation_styles.css'

export default function BadNetwork() {
  const [animation, setAnimation] = useState(true);

  return (
    <Lottie
      className="animated-badNetwork"
      loop={false}
      animationData={bad_network}
      play={animation}
      style={{ width: 200, height: 200 }}
    />
  );
}
