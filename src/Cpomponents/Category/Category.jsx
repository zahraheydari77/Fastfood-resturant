import React, { useState } from "react";
import { LuSalad } from "react-icons/lu";
import { LuDessert } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import "./Category.css";

export default function Category({ categories,filterMenu }) {

  const [mainCategory, setMainCategory] = useState('همه')
  return (
    <>
      <div className="row_button_category">

        {
          categories.map((category, index) => (
            <button key={index}
              className={category === mainCategory ? "button_active_category" : ''}
              onClick={() => {
                setMainCategory(category)
                filterMenu(category)
              
              }
              
              }
            >
              {
                category === 'همه' && (<FaRegCheckCircle className="icon"/>)
              }
              {
                category === 'سالاد' && (<LuSalad  className="icon" />)
              }
                 {
                category === 'دسر' && (<LuDessert className="icon" />)
              }
                 {
                category === 'نوشیدنی' && (<BiSolidDrink  className="icon"/>)
              }
                 {
                category === 'فست فود' && (<IoFastFoodOutline className="icon" />)
              }
              <span>{category}</span>
            </button>
          ))
        }

      </div>

    </>
  )
}


