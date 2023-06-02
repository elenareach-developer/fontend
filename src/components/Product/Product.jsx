import React, {useState, useEffect} from "react"
import "./Product.css"
import { initialProduct } from "../../data/initialProduct";


export default function Product(props) {
  const [size, setSize] = useState("product " + props.size)


  useEffect(()=>{
    setSize("product " + "bigCart")
  },[])
  

  return (
    <>
    <section className={size} key={props?.key}>
    <div className="Cart-Container">
      <div className="Cart-Items">
      
              <div className="title-box">
              <h1>{props.product?.name}</h1>
              </div>
            <div className="description-container">
            <div className="description">
                <h1 className="title">{props?.practice?.name}</h1>
                <h3 className="subtitle">{props?.practice?.intensity}</h3>
                <h3 className="subtitle">{props?.practice?.duration}</h3>

              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}
