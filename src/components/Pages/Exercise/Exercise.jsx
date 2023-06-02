import React, {useState, useEffect} from "react";
import  Product from "../../Product/Product"
import ExerciseForm from "../../Forms/ExerciseFrom/ExerciseForm";
import {useUser} from "../../../Contexts/UserContext"
import { useNavigate} from "react-router-dom"

const Exercise = ()=>{
  const navigate = useNavigate();
  const [isForm, setIsForm] = useState(false);
  const [title, setTitle] = useState("Exercise")
  const { exercise, user}  = useUser();
  const handelClick=(e)=>{
    setIsForm(!isForm);
    setTitle(!isForm?"Add Exercise":"Exercise")
  }
  useEffect(()=>{
    if(!user?.email){
      navigate("/login")
    }
  })

  return(
    <div className="card">
    <h1>{title}  <button onClick={(e)=>handelClick(e)}>{!isForm?"Add Exercise":"Back to Exercises"}</button></h1>
     {!isForm && exercise?.map((el,index)=><Product practice={el} key={index}/>)}
     {(isForm||exercise.length==0) && <ExerciseForm/>}
    
    </div>
  )
}
export default Exercise