import React, { useState } from "react";
import Lottie from "react-lottie-player";
import success_animation from "./success.json";

export default function ActionSuccess() {
  const [animation, setAnimation] = useState(false);
  setTimeout(() => {
    setAnimation(true);
  }, [1000]);

  return (
    <Lottie
      className="animated-error"
      loop={false}
      animationData={success_animation}
      play={animation}
      style={{ width: 200, height: 200 }}
    />
  );
}
