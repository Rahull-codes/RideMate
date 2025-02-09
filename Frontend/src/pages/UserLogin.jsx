import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    const navigate = useNavigate()
    const {user , setUser} = React.useContext(UserDataContext)

    const submitHandler = async (e)=>{
      e.preventDefault();
      
      const userData = {
        email:email,
        password:password
      }
      
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      
    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

      setEmail('')
      setPassword('')
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

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
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
        <p className="text-center"> New here ? <Link to="/signup" className="text-blue-600"> Create New Account </Link></p>
      </div>

      <div>
        <Link 
        to='/captain-login'
        className=" text-lg flex items-center justify-center font-semibold w-full mb-7 bg-[#d0f12a] text-black py-3 rounded ">
          Sign In as Captain
        </Link>
        
      </div>
    </div>
  );
};

export default UserLogin;
