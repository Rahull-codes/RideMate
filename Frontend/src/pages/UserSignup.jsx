import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()

  const {user , setUser} = React.useContext(UserDataContext)

  const submitHandler = async (e)=>{
    e.preventDefault();
    
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

return (
  <div className="p-7 h-screen flex flex-col justify-between">
    <div>
      <img
        className="w-20  mb-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <form onSubmit={(e) =>{
        submitHandler(e)
      }}
      action="">

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

        <h3 className="text-base font-medium mb-3">What's your Email </h3>
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

        <h3 className="text-base font-medium mb-3">Enter Password</h3>
        <input
          required
          value={password}
          onChange={(e) => 
            setPassword(e.target.value)
          }
          type="password"
          placeholder="Password"
          className=" w-full mb-6 rounded bg-[#eeeeee] shadow-sm  px-4 py-2 text-base placeholder:base"
        />
        <button className=" text-lg flex items-center justify-center mb-3 font-semibold w-full bg-black text-white py-3 rounded ">
          Create Account
        </button>
      </form>
      <p className="text-center"> Already have a account ?<Link to="/login" className="text-blue-600"> Login </Link></p>
    </div>

    <div>
    <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the Google<span className='underline font-bold'> Privacy
    Policy</span> and <span className='underline font-bold'>Terms of Service</span> apply.</p>
    </div>
  </div>
);
}

export default UserSignup