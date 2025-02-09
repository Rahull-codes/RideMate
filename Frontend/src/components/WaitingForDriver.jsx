import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className=" w-[93%] flex justify-center text-center absolute top-0  "
      >
        <i className="text-gray-600 text-2xl font-semibold ri-arrow-down-wide-line">
          {" "}
        </i>
      </h5>

      <div className="flex items-center justify-between ">
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1722524376/assets/e3/ca48b0-1601-4c2b-b794-73b54361fce3/original/UberComfort-Premium.png"
          alt=""
        />

        <div className="text-right">
          <h2 className="font-medium text-lg capitalize">
            {props.ride?.captain.fullname.firstname +
              " " +
              props.ride?.captain.fullname.lastname}
          </h2>
          <h4 className=" text-xl font-semibold -mt-2 -mb-1 ">
            {props.ride?.captain.vehicle.plate}
          </h4>
          <p className="text-gray-600 text-sm">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full text-lg font-semibold text-gray-900 bg-gray-100 border-2 border-gray-300 rounded-lg px-4 py-2 shadow-sm">
  OTP : <span className="ml-2 text-xl text-blue-600">{props.ride?.otp}</span>
</div>


      <div className="flex justify-between gap-1 items-center flex-col ">
        <div className="w-full mt-5">
          <div className="flex items-center justify-start gap-4 border-b-2 border-t-2 rounded-lg mb-1 p-2.5  ">
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="font-semibold text-lg">{props.ride?.pickup}</h3>
              <h4 className="text-gray-600"></h4>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4 border-b-2 rounded-lg mb-1 p-2.5 ">
            <i className="ri-pin-distance-fill"></i>
            <div>
              <h3 className="font-semibold text-lg">{props.ride?.destination}</h3>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
