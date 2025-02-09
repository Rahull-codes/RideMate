import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  const{captain , setCaptain} = React.useContext(CaptainDataContext)
  
  
  const submitHandler = async (e)=>{
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

return (
  <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-10  mb-4"
        src="https://static.thenounproject.com/png/509406-200.png"
        alt=""
      />

      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>

        <h3 className="text-base font-medium mb-3">What's your Name </h3>
          
          <div className='flex gap-4 mb-3'>
          <input
          required
          value={firstName}
          onChange={(e) => 
            setFirstName(e.target.value)
          }
          type="text"
          placeholder="First name"
          className=" w-full rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-base placeholder:base"
        />
        <input
          required
          value={lastName}
          onChange={(e) => 
            setLastName(e.target.value)
          }
          type="text"
          placeholder="Last name"
          className=" w-full rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-base placeholder:base"
        />
          </div>

        <h3 className="text-base font-medium mb-2">What's your Email </h3>
        <input
          required
          value={email}
          onChange={(e) => 
            setEmail(e.target.value)
          }
          type="email"
          placeholder="example@gmail.com"
          className=" mb-4 w-full rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-base placeholder:base"
        />

        <h3 className="text-base font-medium mb-2">Enter Password</h3>
        <input
          required
          value={password}
          onChange={(e) => 
            setPassword(e.target.value)
          }
          type="password"
          placeholder="Password"
          className=" w-full mb-4 rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-base placeholder:base"
        />

        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option  value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Bike</option>
            </select>
          </div>


        <button className=" text-lg flex items-center justify-center mb-1 font-semibold w-full bg-black text-white py-3 rounded ">
          Create Captain Account
        </button>
      </form>
      <p className="text-center mb-5"> Already have a account ?<Link to="/captain-login" className="text-blue-600 mb-3"> Login </Link></p>
    </div>

    <div>
    <p className='text-[12px] leading-tight opacity-70'>This site is protected by reCAPTCHA and the Google<span className='underline font-bold'> Privacy
    Policy</span> and <span className='underline font-bold'>Terms of Service</span> apply.</p>
    </div>
  </div>
);
}

export default CaptainSignup

