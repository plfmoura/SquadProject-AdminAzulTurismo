import React, { useState } from "react";
import Lottie from "react-lottie-player";
import delete_animation from "./delete.json";

export default function DeleteSuccess() {
  const [animation, setAnimation] = useState(false);
  setTimeout(() => {
    setAnimation(true);
  }, [1000]);

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
