import React from "react";
import "./Basket.css";
export default function Basket({id,img,price,removeProduct}) {
const clickHandlerRemove=(id)=>{
  removeProduct(id)
}
  return (
    <>
              <div id="basket" className="main-part">
                <button
                onClick={()=>{clickHandlerRemove(id)}}
                className="remove">
                  حذف محصول
                </button>
                <span>{price.toLocaleString('fa-IR')}</span>
                <img className="shopping-image" src={img}></img>
              </div>
    </>
  )
}