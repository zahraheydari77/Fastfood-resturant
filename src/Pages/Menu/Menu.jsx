import React, { useEffect, useState } from "react";
import "./Menu.css";
import Navbar from "../../Cpomponents/Navbar/Navbar";
import FoodBox from "../../Cpomponents/FoodBox/FoodBox";
import Footer from "../../Cpomponents/Footer/Footer";
import Category from "../../Cpomponents/Category/Category";
import Basket from "../../Cpomponents/Basket/Basket";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Menu() {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();
  const [allMenus, setAllmenu] = useState([]);
  const [allFoods, setAllFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShopingCart] = useState([]);
  useEffect(() => {
    getAllFoods();
  }, []);

  useEffect(() => {
    if (shoppingCart.length) {
      priceCalculator();
    }
  }, [shoppingCart]);

  function getAllFoods() {
    fetch("https://fastfood-resturant-12wn.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        setAllmenu(data);
        setAllFoods(data);
        const allCategories = [
          ...new Set(data.map((food) => food.category)),
          "همه",
        ];
        console.log(allCategories);
        setCategories(allCategories);
      });
  }
  const filterMenu = (category) => {
    if (category === "همه") {
      setAllFoods(allMenus);
      return;
    }

    let filteredMenus = allMenus.filter((menu) => menu.category === category);
    setAllFoods(filteredMenus);
  };
  const addProductToCart = (product) => {
    setShopingCart((prev) => [...prev, product]);
  };

  const removeProduct = (id) => {
    let newShoppingCart = shoppingCart.filter((food) => {
      return food.id !== id;
    });
    setShopingCart(newShoppingCart);
  };

  function priceCalculator() {
    const PriceArray = shoppingCart.map((item) => {
      return item.price;
    });
    const totalPriceNum = PriceArray.reduce(function (prev, current) {
      return Number(prev) + Number(current);
    });
    setTotalPrice(totalPriceNum);
  }

  const saleAction = () => {
    Swal.fire({
      title: " متاسفم ",
      text: ` درگاه بانکی فعال نیست `,
      icon: "error",
      confirmButtonText: "باشه",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="main-nav">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="section_food">
        <div className="container_site">
          <div className="row_title_section_food">
            <h4>منو</h4>
          </div>
          {/* category-part */}
          <Category categories={categories} filterMenu={filterMenu} />
          {/* box */}
          <FoodBox foods={allFoods} addProductToCart={addProductToCart} />
        </div>

        <div className="container">
          {/* cart part */}
          <h1 className="h1-name">سبد خرید</h1>
          <div className="shoppingCart-title-container">
            <h3 className="action">حذف </h3>
            <h3 className="price">قیمت </h3>
            <h3 className="item">محصول</h3>
          </div>
          {shoppingCart.map((item) => (
            <Basket {...item} removeProduct={removeProduct} />
          ))}

          {/* total price */}
          <div className="total-price-part">
            <button className="total-btn" onClick={saleAction}>
              تسویه حساب
            </button>
            <span>{totalPrice?.toLocaleString('fa-IR')}</span>
            <h2>جمع کل قیمت</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
