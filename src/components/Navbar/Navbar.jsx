import * as React from "react"
import "./Navbar.css"
import logo from "../../assets/codepath.svg";
import {Link} from "react-router-dom";
import NavbarLinks from "../NavLinks/NavbarLinks"
import {useUser} from "../../Contexts/UserContext"


export default function Navbar() {
  const {user}  = useUser();
  return (
    <nav className="navbar">
      <div className="leftNav">
      <Link to="/"> <img src={logo} alt="codepath logo" /></Link>
      </div>
      <div className="righNav">
         {!user?.email &&<Link to="/login">Login</Link>}
       {user?.email&& <Link to="/logout">Logout</Link>}
        <Link to="/registration">Registration</Link>
        < NavbarLinks/>
      </div>
    </nav>
  )
}

