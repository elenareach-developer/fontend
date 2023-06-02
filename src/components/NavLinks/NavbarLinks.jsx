import * as React from "react"
import "./NavbarLinks.css"
import { useNavigate, Link } from "react-router-dom"
import {useUser} from "../../Contexts/UserContext"

export default function NavbarLinks() {
  const {user}  = useUser();
  const navigate = useNavigate()

  return (
      <div className="NavbarLink">
      {user?.email&&<>
       <Link to="/exercise">Exersise</Link>
       <Link to="/nutrition">Nutrition</Link>
       <Link to="/sleep">Sleep</Link>
       </>}
    </div>
  )
}

