import React, {useEffect} from "react";
import {Link} from "react-router-dom"
import {useUser} from "../../../Contexts/UserContext"
import {useNavigate} from "react-router-dom";
import NavbarLinks from "../../NavLinks/NavbarLinks"



const Portal = ()=>{
  const {user,fetchExercise, fetchNutrition, fetchSleep, exercise, sleep, nutrition, setIsFetch}  = useUser();
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchingData =async()=>{
      setIsFetch(true)
      const resExercise = await fetchExercise();
      const resSleep = await fetchSleep();
      const resNutrition = await fetchNutrition();
      console.log(exercise);
      console.log(sleep);
      console.log(nutrition);
      setIsFetch(false);
    }
    if(!user.email){
      navigate("/login")
    }else{
      fetchingData();
    }
  },[])
  return(
    <>   
      <h3 id="about">Welcome to {user?.first_name} Portal</h3>
          <div className="card">
              <NavbarLinks/>
          </div>
    </>
  )
}
export default Portal