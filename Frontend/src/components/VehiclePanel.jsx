import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>{
          props.setVehiclePanel(false)
        }} className=" w-[93%] flex justify-center text-center absolute top-0  "> <i className="text-gray-500 text-2xl font-semibold ri-arrow-down-wide-line"> </i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle <i className="ri-taxi-fill"></i> </h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('car')
        }} className="flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className=" w-[70%]">
              <h4 className="font-bold text-lg">UberGo<span><i className="font-normal ml-2 ri-user-3-fill">4</i></span></h4>
              <h5 className="font-semibold">2 mins away</h5>
              <p className="font-medium text-sm text-gray-600">Affordable , compact rides</p>
            </div>
            <h2 className="text-lg font-semibold" >₹{props.fare.car}</h2>
        </div>

        <div  onClick={()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('moto')
        }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className=" w-[70%]">
              <h4 className="font-bold text-lg">Moto<span><i className="font-normal ml-2 ri-user-3-fill">1</i></span></h4>
              <h5 className="font-semibold">2 mins away</h5>
              <p className="font-medium text-sm text-gray-600">Affordable motarcycle rides</p>
            </div>
            <h2 className="text-lg font-semibold" >₹{props.fare.moto}</h2>
        </div>

        <div  onClick={()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('auto')
        }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between ">
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=" w-[70%]">
              <h4 className="font-bold text-lg">UberAuto<span><i className="font-normal ml-2 ri-user-3-fill">3</i></span></h4>
              <h5 className="font-semibold">2 mins away</h5>
              <p className="font-medium text-sm text-gray-600">Affordable Auto rides</p>
            </div>
            <h2 className="text-lg font-semibold" >₹{props.fare.auto}</h2>
        </div> 
    </div>
  )
}

export default VehiclePanel
