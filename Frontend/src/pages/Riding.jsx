import React from 'react'
import { Link , useLocation  } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../../components/LiveTracking'

const Riding = () => {

  const location = useLocation()
  const { ride } = location.state || {} // Retrieve ride data
  const { socket } = useContext(SocketContext)
  const navigate = useNavigate()

  socket.on("ride-ended", () => {
      navigate('/home')
  }) 

  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 border-gray-500 border-2 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-semibold ri-home-5-line"></i>
        </Link>
        <div className='h-1/2'>
            <LiveTracking />
        </div>
        <div className='h-1/2 p-4'>

        <div className='flex items-center justify-between '>
        <img className="h-12 " src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1722524376/assets/e3/ca48b0-1601-4c2b-b794-73b54361fce3/original/UberComfort-Premium.png" alt="" />  

        <div className='text-right'>
            <h2 className='font-medium text-lg capitalize'>{ride?.captain.fullname.firstname + " " +  ride?.captain.fullname.lastname}</h2>
            <h4 className=' text-xl font-semibold -mt-2 -mb-1 '>{ride?.captain.vehicle.plate}</h4>
            <p className='text-gray-600 text-sm'></p>
        </div>
        </div>

        <div className='flex justify-between gap-1 items-center flex-col '>
        <div className='w-full mt-5'>
            <div className='flex items-center justify-start gap-4 border-b-2 rounded-lg mb-1 p-2.5 '>
            <i className="ri-pin-distance-fill"></i>
              <div>
                <h3 className='font-semibold text-lg'>{ride?.destination}</h3>
                <h4 className='text-gray-600'></h4>
              </div>
            </div>
            <div className='flex items-center justify-start gap-4   rounded-lg mb-1 p-2.5 '>
            <i className="text-lg ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className='font-bold text-lg'>₹{ride?.fare}</h3>
                <h4 className='text-gray-600'>Cash/UPI/Credit Card</h4>
              </div>
            </div>
        </div>
        </div> 
        <button className='w-full mt-5 bg-green-600 text-lg font-semibold p-2 rounded-lg ' >Make a payment</button>

        </div>
    
    </div>
  )
}

export default Riding