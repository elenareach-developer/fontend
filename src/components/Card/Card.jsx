import React from "react"

export default function Card({
  title = "",
  subtitle = "",
  primaryAction = null,
  secondaryActions = null,
  filterActions = null,
  bg = "secondary.card",
  color = "gray.800",
  children,
}) {
  return (
    <>
      <div className="card  bg color">

            <div className="title">{title}</div>

            <div className="icon">
            
            </div>

            <div className="features">
              <ul>
                <li><span>5</span> Edits</li>
                <li><span>1GB</span> Storage</li>
                <li><span>3</span> Pages</li>
                <li><span>1</span> Hour free support</li>
              </ul>
            </div>

            <a href="#" className="btn">Check it out</a>

            </div>

    </>
  )
}
