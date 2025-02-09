import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [ otp, setOtp ] = useState('')
  const navigate = useNavigate()

  const submitHander = async (e) => {
      e.preventDefault()

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
          params: {
              rideId: props.ride._id,
              otp: otp
          },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })

      if (response.status === 200) {
          props.setConfirmRidePopupPanel(false)
          props.setRidePopupPanel(false)
          navigate('/captain-riding', { state: { ride: props.ride } })
      }


  }
  return (
    <div >
      <h5 onClick={()=>{
          props.setRidePopupPanel(false)
        }} className=" w-[93%] flex justify-center text-center absolute top-0  "> 
        <i className="text-gray-600 text-2xl font-semibold ri-arrow-down-wide-line"> </i></h5>
        <h3 className="text-xl font-semibold mb-4">New Ride Available! <i className="ri-taxi-fill"></i> </h3>

        <div className='flex items-center justify-between mb-4 p-3 border-2 border-yellow-200 rounded-lg'
        >
           <div  className='flex items-center justify-start gap-3'>
            <img className = "h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
            <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
         </div>
            <h5 className='text-lg font-semibold'>2.2kM</h5>
        </div>

        <div className='flex justify-between gap-1 items-center flex-col '>
        <div className='w-full'>
            <div className='flex items-center justify-start gap-4 border-b-2 border-t-2 rounded-lg mb-1 p-2.5  '>
              <i className="text-lg ri-map-pin-range-fill"></i> 
              <div>
                <h3 className='font-semibold text-lg'>{props.ride?.pickup}</h3>
                <h4 className='text-gray-600'></h4>
              </div>
            </div>
            <div className='flex items-center justify-start gap-4 border-b-2 rounded-lg mb-1 p-2.5 '>
            <i className="ri-pin-distance-fill"></i>
              <div>
                <h3 className='font-semibold text-lg'>{props.ride?.destination}</h3>
                <h4 className='text-gray-600'></h4>
              </div>
            </div>
            <div className='flex items-center justify-start gap-4   rounded-lg mb-1 p-2.5 '>
            <i className="text-lg ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className='font-bold text-lg'>₹{props.ride?.fare} </h3>
                <h4 className='text-gray-600'>Cash/UPI/Credit Card</h4>
              </div>
            </div>
        </div>
        <div className=' mt-4 w-full'>
        <form onSubmit={submitHander}>
            <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />

            <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
            <button onClick={() => {
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
                props.setVehiclePanel(false)
              }} 
        className='w-full mt-1 bg-red-600 text-lg  text-white font-semibold p-3 rounded-lg '>Cancel</button>
        </form>
        </div>
        </div>  
    </div>
  )
}

export default ConfirmRidePopUp
