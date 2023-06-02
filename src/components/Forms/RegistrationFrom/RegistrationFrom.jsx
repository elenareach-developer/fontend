import React,{useState, useEffect} from "react"
import { useNavigate} from "react-router-dom"
import "./RegistrationFrom.css"
import {useUser} from "../../../Contexts/UserContext"
import {validateEmail} from "../../../services/validation"



export default function RegistrationFrom(props) {
  const {createUser, setIsFetch, setRegCred, error}  = useUser();
  const navigate = useNavigate()
  const [isEmail, setIsEmail] = useState(false);
  const [message, setMessage] = useState("")
  const [isPass, setIsPass] = useState(false);
  const [state] = useState()

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
   setRegCred((prevProps) => ({
       ...prevProps,
        [name]: value
     }));
     
  };

  useEffect(()=>{
   
  },[isPass,isEmail,error])

  const handleSubmit = async ()  => {
    setIsFetch(true);
    if(isPass&&isEmail){
        const send = await createUser()
      console.log(error)
        if(!error){
          setIsFetch(false);
          navigate("/portal");
        }else{
          alert(" this user exist, use different email")
        }
      }
    }

  

  return (
    <div className="App">{error}
         <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button onClick={handleSubmit}>Register</button>
        </div>
    </div>
  );
}