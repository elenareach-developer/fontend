import React, {useState, useEffect} from "react"
import "./ProductDetails.css"
import { useParams } from "react-router-dom";
import {useProducts} from "../../Contexts/ProductsContext";
import Product from"../Product/Product";
import { Link } from "react-router-dom";
 


export default function ProductDetails() {
  const { productId } = useParams();
  const { productList, SearchProductById} = useProducts();
  const [product,setProduct] = useState(SearchProductById(productId));
  const [yesProduct,setYesProduct] = useState(false);

  useEffect(()=>{
    if(productId){
      let searchItem = productList.find(el=>{
        return el.id==productId
      })
    if(searchItem){
      setProduct(searchItem)
      setYesProduct(true)
    }}
  },[productId])

  return (
    <>
     <Link to={`/`}><span className="red">Back to list</span></Link>
    {yesProduct&&<Product key={product.key} product={product} size="bigCart"/>  }
    {!yesProduct&&<div>No Product with id {productId}</div>}
    </>
  )

}
