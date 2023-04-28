import React, { useState } from "react";
import Lottie from "react-lottie-player";
import delete_animation from "./delete.json";
import '../animation_styles.css'

export default function DeleteSuccess() {
  const [animation, setAnimation] = useState(true);

  return (
    <Lottie
      className="animated-delete"
      loop={false}
      animationData={delete_animation}
      play={animation}
      style={{ width: 200, height: 200 }}
    />
  );
}
