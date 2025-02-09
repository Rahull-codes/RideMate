import React,{useContext} from 'react'
import {CaptainDataContext} from '../src/context/CaptainContext'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)
  return (
    <div>
        <div className='flex items-center justify-between'>
        <div  className='flex items-center justify-start gap-3'>
      <img className = "h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h4 className='text-lg font-medium capitalize '>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
    </div>
    <div>
      <h4 className=' text-xl font-semibold'>₹193.45</h4>
      <p className='text-sm  text-gray-600 '>Earned</p>
    </div>
  </div>
  <div className='flext p-3 justify-between items-start bg-gray-100 rounded-xl gap-5 mt-7'>
    <div className='flex items-center justify-between '>
      <div className='text-center  '>
        <i className=" text-2xl ri-time-line font-thin"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
      </div>
      <div className='text-center' >
        <i className="  text-2xl ri-speed-up-line font-thin " ></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
      </div>
      <div className='text-center '>
      <i className=" text-2xl ri-booklet-line font-thin "></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
      </div>
    </div>
  </div> </div>
  )
}

export default CaptainDetails