import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTour } from "../../reducer/tourReducer";
import axios from "axios";

export default function Tour() {
  /* const dispatch = useDispatch();
  const getTour = async () => {
    const options = {
      method: "GET",
      url: "https://tourismapi.herokuapp.com/products",
    };
    try {
      let tour = await axios.request(options);
      dispatch(setTour(tour.data));
    } catch (error) {}
  };
  useEffect(() => {
    getTour();
  }, []);*/

  return (
    <div>
      <h1>Tour</h1>
    </div>
  );
}
