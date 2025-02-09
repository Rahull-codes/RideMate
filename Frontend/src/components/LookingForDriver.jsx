import React from 'react'

const LookingForDriver = (props) => {

  const getVehicleImage = (vehicleType) => {
    const vehicleImages = {
        car: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1722524376/assets/e3/ca48b0-1601-4c2b-b794-73b54361fce3/original/UberComfort-Premium.png",
        moto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
        auto: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
    };
    
    return vehicleImages[vehicleType]; 
};

  return (
    <div>
      
        <h3 className="text-xl font-semibold mb-5">Looking for a Driver<i className="ri-user-fill"></i> </h3>
        <div className='flex justify-between gap-1 items-center flex-col '>
        <img className="h-20 " src={getVehicleImage(props.vehicleType)} alt="" />
        <div className='w-full mt-5'>
            <div className='flex items-center justify-start gap-4 border-b-2 border-t-2 rounded-lg mb-1 p-2.5  '>
              <i className="text-lg ri-map-pin-range-fill"></i> 
              <div>
                <h3 className='font-semibold text-sm'>{props.pickup}</h3>
              </div>
            </div>
            <div className='flex items-center justify-start gap-4 border-b-2 rounded-lg mb-1 p-2.5 '>
            <i className="ri-pin-distance-fill"></i>
              <div>
                <h3 className='font-semibold text-sm'>{props.destination}</h3>
              </div>
            </div>
            <div className='flex items-center justify-start gap-4   rounded-lg mb-1 p-2.5 '>
            <i className="text-lg ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className='font-bold text-lg'>₹{props.fare[props.vehicleType]}</h3>
                <h4 className='text-gray-600'>Cash/UPI/Credit Card</h4>
              </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default LookingForDriver