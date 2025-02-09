import React, { useRef, useState , useEffect} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from 'axios';
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import VehiclePanell from "../../components/VehiclePanel";
import ConfirmedRide from "../../components/ConfirmedRide";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";
import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import LiveTracking from "../../components/LiveTracking";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const VehiclePanelRef = useRef(null);
  const ConfirmRidePanelRef = useRef(null);
  const VehicalFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [VehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const [ fare, setFare ] = useState({})
  const [ vehicleType, setVehicleType ] = useState(null)
  const [ ride, setRide ] = useState(null)

  const navigate = useNavigate()

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id })
}, [ user ])

socket.on('ride-confirmed', ride => {

    setVehicleFound(false)
    setWaitingForDriver(true)
    setRide(ride)
})

socket.on('ride-started', ride => {
  console.log("ride")
  setWaitingForDriver(false)
  navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
})

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      setPickupSuggestions(response.data);
    } catch (error) {
      
    }
  };
  

const handleDestinationChange = async (e) => {
  setDestination(e.target.value)
  try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: e.target.value },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      setDestinationSuggestions(response.data)
  } catch {
      // handle error
  }
  }


  const submithandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if(VehiclePanel){
        gsap.to(VehiclePanelRef.current ,{
          transform:'translateY(0)'
        })
      }else{
        gsap.to(VehiclePanelRef.current ,{
          transform:'translateY(100%)'
        })
      }
    },[VehiclePanel])

  useGSAP(
      function () {
        if(confirmRidePanel){
          gsap.to(ConfirmRidePanelRef.current ,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(ConfirmRidePanelRef.current ,{
            transform:'translateY(100%)'
          })
        }
    },[confirmRidePanel])  

  useGSAP(
        function () {
          if(vehicleFound){
            gsap.to(VehicalFoundRef.current ,{
              transform:'translateY(0)'
            })
          }else{
            gsap.to(VehicalFoundRef.current ,{
              transform:'translateY(100%)'
            })
          }
    },[vehicleFound])      

    useGSAP(
      function () {
        if(waitingForDriver){
          gsap.to(WaitingForDriverRef.current ,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(WaitingForDriverRef.current ,{
            transform:'translateY(100%)'
          })
        }
  },[waitingForDriver]) 


  async function findTrip() {
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
        params: { pickup, destination },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    setFare(response.data)
  }

  async function createRide() {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

  }
 
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 m-5  absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div  className="h-screen fixed w-screen  z-[-1]">
      <LiveTracking />
      </div>

      <div className=" h-screen flex flex-col justify-end absolute top-0 w-full  ">
        <div className="h-[35%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-1 opacity:0 right-3 text-2xl font-semibold "
          >
            <i className="ri-arrow-down-wide-line"></i>
            
          </h5>
          <h4 className="text-2xl font-semibold mb-3.5">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
          >
            <div className="line absolute h-14 w-[0.7%] top-[35%] left-[10%] bg-black"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg mb-2 w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg  w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button
            onClick={findTrip}
            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
            Find Trip
          </button>
        </div>

      <div ref={panelRef} className="h-[0] bg-white ">
      <LocationSearchPanel
        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
        setPanelOpen={setPanelOpen}
        setVehiclePanel={setVehiclePanel}
        setPickup={setPickup}
        setDestination={setDestination}
        activeField={activeField} />
      </div>
      </div>

      <div ref={VehiclePanelRef} className="  fixed w-full z-10 bottom-0 translate-y-full px-3 py-10  bg-white">    
        <VehiclePanell 
         setVehicleType = {setVehicleType}
         fare={fare} 
         setConfirmRidePanel = {setConfirmRidePanel} 
         setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={ConfirmRidePanelRef} className="  fixed w-full z-10 bottom-0 translate-y-full px-3 py-8  bg-white">    
        <ConfirmedRide
        pickup={pickup}
        destination={destination}
        fare={fare}
        vehicleType={vehicleType}
        createRide={createRide} 
        setConfirmRidePanel = {setConfirmRidePanel} 
        setVehiclePanel={setVehiclePanel}
        setVehicleFound={setVehicleFound} />
      </div>

      <div ref={VehicalFoundRef} className="  fixed w-full z-10 bottom-0 translate-y-full px-3 py-8  bg-white">    
        <LookingForDriver 
        createRide={createRide}
        pickup={pickup}
        destination={destination}
        fare={fare}
        vehicleType={vehicleType}
        setVehiclePanel={setVehiclePanel}  />
      </div>

      <div ref = {WaitingForDriverRef} className="  fixed w-full z-10 bottom-0  px-3 py-8  bg-white">    
        <WaitingForDriver 
          ride={ride}
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
          waitingForDriver={waitingForDriver}  />
      </div>
      
    </div>
  );
};

export default Home;
