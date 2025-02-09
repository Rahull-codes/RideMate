import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogin =  () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
    
  const{captain , setCaptain} = React.useContext(CaptainDataContext)
  const navigate = useNavigate()
  
  const submitHandler = async (e)=>{
    e.preventDefault();
    const captain = {
      email:email,
      password:password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
      setEmail('')
      setPassword('')
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16  mb-3"
          src="https://static.thenounproject.com/png/509406-200.png"
          alt=""
        />

        <form onSubmit={(e) =>{
          submitHandler(e)
        }}
        action="">
          <h3 className="text-lg font-medium mb-2">What's your Email </h3>
          <input
            required
            value={email}
            onChange={(e) => 
              setEmail(e.target.value)
            }
            type="email"
            placeholder="example@gmail.com"
            className=" mb-4 w-full rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-lg placeholder:base"
          />

          <h3 className="text-lg  font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => 
              setPassword(e.target.value)
            }
            type="password"
            placeholder="password"
            className=" w-full mb-6 rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-lg placeholder:base"
          />
          <button className=" text-lg flex items-center justify-center mb-3 font-semibold w-full bg-black text-white py-3 rounded ">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet ? <Link to="/captain-signup" className="text-blue-600"> Register as a captain </Link> </p>
      </div>

      <div>
        <Link 
        to='/login'
        className=" text-lg flex items-center justify-center font-semibold w-full mb-7 bg-[#ee9828] text-black py-3 rounded ">
          Sign In as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin