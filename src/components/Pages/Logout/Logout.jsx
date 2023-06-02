import React, {useEffect} from "react";
import {useUser} from "../../../Contexts/UserContext"
import { useNavigate} from "react-router-dom"


const Logout = ()=>{
  const { Logout}  = useUser();
  const navigate = useNavigate();
  
  useEffect(()=>{
      Logout();
      navigate("/")
    
  })
  return(
    <></>
  )
}
export default Logout