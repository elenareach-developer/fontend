import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import "./globals.css"
import { UserProvider }from "./Contexts/UserContext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
)
