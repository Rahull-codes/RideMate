import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h3 className="text-xl font-semibold mb-4">New Ride Available! <i className="ri-taxi-fill"></i> </h3>

        <div className='flex items-center justify-between mb-4 p-3 bg-yellow-300 rounded-lg'>
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
                <h3 className='font-bold text-lg'>₹{props.ride?.fare}</h3>
                <h4 className='text-gray-600'>Cash/UPI/Credit Card</h4>
              </div>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5 w-full gap-3 '>
        <button onClick={()=>{
            props.setRidePopupPanel(false)
          
        }}
        className='w-1/2 bg-gray-200 text-lg font-semibold p-3 px-8 rounded-lg '>Ignore</button>
        <button onClick={()=>{
            props.setConfirmRidePopupPanel(true)
            props.confirmRide()
        }}
        className=' w-1/2 bg-green-600 text-lg font-semibold p-3 px-8 rounded-lg '>Accept</button>
        </div>
        </div> 
    </div>
  )
}

export default RidePopUp
