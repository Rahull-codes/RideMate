import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FinishRide = (props) => {
  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
      {
        rideId: props.ride._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      navigate("/captain-home");
    }
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className=" w-[93%] flex justify-center text-center absolute top-0  "
      >
        <i className="text-gray-600 text-2xl font-semibold ri-arrow-down-wide-line">
          {" "}
        </i>
      </h5>
      <h3 className="text-xl font-semibold mb-4">
        Finish Ride!!<i className="ri-taxi-fill"></i>{" "}
      </h3>

      <div className="flex items-center justify-between mb-4 p-4 border-2 border-yellow-200 rounded-lg">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">
          {props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}
          </h2>
        </div>
        
      </div>

      <div className="flex justify-between gap-1 items-center flex-col ">
        <div className="w-full">
          <div className="flex items-center justify-start gap-4 border-b-2 border-t-2 rounded-lg mb-1 p-2.5  ">
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="font-semibold text-lg m-2">{props.ride?.pickup}</h3>
              <h4 className="text-gray-600"></h4>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4 border-b-2 rounded-lg mb-1 p-2.5 ">
            <i className="ri-pin-distance-fill"></i>
            <div>
              <h3 className="font-semibold text-lg m-2">{props.ride?.destination}</h3>
              <h4 className="text-gray-600"></h4>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4   rounded-lg mb-1 p-2.5 ">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="font-bold text-lg">₹{props.ride?.fare}</h3>
              <h4 className="text-gray-600">Cash/UPI/Credit Card</h4>
            </div>
          </div>
        </div>
        <div className=" mt-4 w-full">
          <button
            onClick={endRide}
            className="w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </button>
          <p className="text-xs text-gray-500 w-[90%] mt-10">
            <span className="text-black">*</span>Click on{" "}
            <span className="text-black font-bold">Finish ride</span> button if
            you have completed the payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
