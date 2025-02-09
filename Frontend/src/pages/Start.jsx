import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-bottom bg-cover  bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg)] h-screen pt-8  w-full flex justify-between flex-col' >
        <img  className= "w-16 ml-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold '>Get Started with Uber</h2>
            <Link to= '/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
    </div>
  )
}

export default Start