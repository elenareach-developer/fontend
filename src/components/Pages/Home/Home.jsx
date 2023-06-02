import React from "react";
import  About from "../../About/About"
import  Hero from "../../Hero/Hero"


const Home = ()=>{

  return(
    <>   
      <div className="card greenBg noTop">
        <Hero />
      </div>
      <h3 id="about">About</h3>
          <div className="card">
            <About />
          </div>
    </>
  )
}
export default Home