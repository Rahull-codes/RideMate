import React, { useRef, useState } from 'react'
import { Link , useLocation  } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../../components/FinishRide'
import LiveTracking from '../../components/LiveTracking'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)
  const location = useLocation()
  const rideData = location.state?.ride

  useGSAP(
      function () {
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current ,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current ,{
            transform:'translateY(100%)'
          })
        }
    },[finishRidePanel])

  return (
    <div className='h-screen relative'>
        
        <div className='fixed flex items-center justify-between w-screen p-6 top-0'>
          <img className=" w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
           <Link to='/captain/logout' className=' h-10 w-10 border-gray-500 border-2 bg-white flex items-center justify-center rounded-full'>
           <i className="text-lg font-semibold ri-logout-box-r-line"></i>
            </Link>
        </div>
        <div className='h-4/5'>
        
        </div>
        <div className='h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative '
        onClick={()=>{
          setFinishRidePanel(true)
        }}
        >
        <h5 onClick={()=>{
        }} className=" w-[90%] flex justify-center text-center absolute top-0  "> 
        <i className="text-gray-700 text-3xl font-semibold ri-arrow-up-wide-line"> </i></h5>

          <h4 className='text-xl font-semibold '>{'4 KM away'}</h4>
          <button className=' bg-green-700 text-white text-xl font-semibold p-3 px-8 rounded-lg'>Complete Ride</button>
        </div>

        <div ref={finishRidePanelRef} className="  fixed w-full h-screen z-10 translate-y-full bottom-0 px-3 py-8  bg-white">    
            <FinishRide 
            ride={rideData}
            setFinishRidePanel = {setFinishRidePanel} />
        </div>

        <div className='h-screen fixed w-screen top-0 z-[-1]'>
          <LiveTracking />
        </div> 

    </div>
  )
}

export default CaptainRiding