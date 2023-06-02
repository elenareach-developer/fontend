import * as React from "react"
import watch from "../../assets/watch.jpg"
import "./Hero.css"

export default function Home() {
  return (
    <div className="hero">

      <div className="item">
          <h1 className="whiteText noTop">LIFETRACKER</h1>
          <h4 className="noTop">Stay Active</h4>
          <div className="noTop smallText">No matter how you stay active — be it through walking, running, biking, weightlifting, or swimming — tracking all that information has never been easier thanks to advancements in fitness technology over the past few years.</div>
        </div>
        <div className="item"> <img src={watch} className="hero_img" alt="codepath logo" /></div>
    </div>
  )
}
