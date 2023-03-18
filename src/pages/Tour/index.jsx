import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTour } from "../../reducer/tourReducer";
import axios from "axios";

export default function Tour() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Tour</h1>
    </div>
  );
}
