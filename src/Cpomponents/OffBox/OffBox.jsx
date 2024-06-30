import React from "react";
import { Link } from "react-router-dom";
import "./OffBox.css";

  export default function OffBox({category,desc,img,newPrice,oldPrice,title}) {
    return (

        <>
            <div className="item_food_off">
              <div className="title_sm">

                <span>

                </span>
                <span>
                  {category}
                </span>
              </div>
              <div className="row_info_food_off">
              <div className="left_item_food_off">
                  <img src={img} alt="" />
                </div>
                <div className="right_item_food_off">
                  <h6>{title}</h6>
                  <p> {desc}</p>
                  <div className="price_off">
                    <del>{oldPrice.toLocaleString('fa-IR')}</del>
                    <span>{newPrice.toLocaleString('fa-IR')}</span>
                  </div>
                  <Link to='/menu' className="link-basket">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9963 12C5.344 12 4.86633 12.6144 5.02717 13.2466L6.42488 18.7398C6.76319 20.0693 7.96032 21 9.33225 21H14.6652C16.0383 21 17.2362 20.0678 17.5734 18.7367L18.9644 13.2456C19.1245 12.6137 18.6469 12 17.9951 12H5.9963ZM9 16C9 15.4477 9.44771 15 10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44771 18 9 17.5523 9 17V16ZM13 16C13 15.4477 13.4477 15 14 15C14.5523 15 15 15.4477 15 16V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V16Z" fill="#F1F1F1" />
                      <path d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z" fill="#F1F1F1" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.70711C11.0976 4.31658 11.0976 3.68342 10.7071 3.29289C10.3166 2.90237 9.68342 2.90237 9.29289 3.29289L8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711C8.68342 6.09763 9.31658 6.09763 9.70711 5.70711L10.7071 4.70711ZM13.2929 4.70711C12.9024 4.31658 12.9024 3.68342 13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L13.2929 4.70711Z" fill="#F1F1F1" />
                    </svg>
                    <span className="span-basket"> سفارش بده</span>
                  </Link>
                </div>
                

              </div>

            </div>
        
        </>
  )
}