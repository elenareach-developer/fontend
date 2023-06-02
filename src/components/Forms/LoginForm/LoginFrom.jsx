import React,{useState, useEffect} from "react"
import { useNavigate} from "react-router-dom"
import "./LoginFrom.css"
import {useUser} from "../../../Contexts/UserContext"
import {validateEmail} from "../../../services/validation"



export default function LoginFrom(props) {
  const {setAuthCred, fetchUser,isFetch, setIsFetch, user}  = useUser();
  const navigate = useNavigate()
  const [isEmail, setIsEmail] = useState(false);
  const [isPass, setIsPass] = useState(false);

  const handleInputChange = (event) => {
   const { name, value } = event.target;
   if(name=="email"){
    if(!validateEmail(value)){
      setIsEmail(false)
    }else{
      setIsEmail(true)
    }
   }
   if(name=="password"){
    if(value.length<3){
      setIsPass(false)
    }else{
      setIsPass(true)
    }
   }
   setAuthCred((prevProps) => ({
       ...prevProps,
        [name]: value
     }));
     
  };
  useEffect(()=>{
   
  },[isPass,isEmail])

  const handleSubmit = async ()  => {
    setIsFetch(true);
    if(isPass&&isEmail){
      const res = await fetchUser()
      navigate("/portal")
      setIsFetch(false);
    }
  };

  return (
    <div className="LoginFrom red">
      <div className="box">
        <div className="form-control">
          <label>Login(email)</label>
          <input
            type="email"
            name="email"
            className={"email " + isEmail?"":"err"}
            onKeyUp={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
           type="password"
            name="password"
            className={"pass " + isPass?"":"err"}
            onKeyUp={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="form-control">
          <button onClick ={(e)=>handleSubmit(e)}>Login</button>
        </div>
        </div>
    </div>
  );
}