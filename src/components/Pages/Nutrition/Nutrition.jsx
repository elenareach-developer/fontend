import React, {useState, useEffect} from "react";
import  Product from "../../Product/Product"
import NutritionForm from "../../Forms/NutritionFrom/NutriotionFrom";
import {useUser} from "../../../Contexts/UserContext"
import { useNavigate} from "react-router-dom"

const Nutrition = ()=>{
  const navigate = useNavigate();
  const [isForm, setIsForm] = useState(false);
  const { nutrition, user}  = useUser();
  const [title, setTitle] = useState("Nutrition")
  const handelClick=(e)=>{
    setIsForm(!isForm);
    setTitle((!isForm||nutrition.length==0)?"Add Nutrition":"Nutrition")
  }
  useEffect(()=>{
    if(!user?.email){
      navigate("/login")
    }
    if(nutrition.length!=0){
      setTitle("Add Nutrition")
    }
  })

  return(
    <div className="card">
    <h1>{title}  {nutrition.length!=0&&<button onClick={(e)=>handelClick(e)}>{!isForm?"Add Nutirition":"Back to Nutrition List"}</button>}</h1>
     {!isForm && nutrition?.map((el,index)=><Product practice={el} key={index}/>)}
     {(isForm||nutrition.length==0) && <NutritionForm/>}
    
    </div>
  )
}
export default Nutrition