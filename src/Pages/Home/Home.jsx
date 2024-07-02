import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from '../../Cpomponents/Header/Header'
import { PiHandbagSimpleFill } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import Footer from '../../Cpomponents/Footer/Footer'
import OffBox from "../../Cpomponents/OffBox/OffBox";
import Swal from 'sweetalert2'
export default function Home() {

  const [offs, setOffs] = useState([])

  useEffect(() => {
    fetch('https://fastfood-resturant-12wn.vercel.app/offs')
      .then(res => res.json())
      .then(
        data => {
          console.log(data)
          setOffs(data)
        }
      )
  }, [])
  const bazzarDownload = () => {
    Swal.fire({
      title: "تبریک",
      text: "در حال دانلود از کافه بازار هستید",
      imageUrl: "./img/bazzar.png",
      imageWidth: 400,
      imageHeight: 130,
      imageAlt: "Custom image",
      confirmButtonText: 'خیلی هم عالی'
    });
  }
  const googlePlayDownload = () => {
    Swal.fire({
      title: "تبریک",
      text: "در حال دانلود از گوگل پلی هستید",
      imageUrl: "./img/download.png",
      imageWidth: 400,
      imageHeight: 120,
      imageAlt: "Custom image",
      confirmButtonText: 'خیلی هم عالی'
    });
  }
  return (
    <>
      <Header />

      <div className="section_off">
        <div className="container_off">
          <div className="row_title_section_food">
            <h4>تخفیف ها</h4>
          </div>

          <div className="grid_food_off">
            {
              offs.map(off => (
                <OffBox {...off}/>
              ))
            }
           
          </div>
        </div>
      </div>



      {/* mobile */}

      <div className="section_mobile_app">
        <div className="img_section_mobile_app">
          <img src="./img/mobile.png" />
        </div>
        <div className="content_section_mobile_app">
          <h6>تخفیفات باورنکردنی و موارد بیشتر</h6>
          <h4>اپلیکیشن موبایل </h4>
          <p>به عنوان یک برند فست فود ما درکنار تهیه مرغوب ترین مواد اولیه و طعم لذت بخش غذا ارایه بهترین سرویس را آرزومندیم.</p>
          <div className="download_btn_app">
            <button onClick={bazzarDownload}>
              <PiHandbagSimpleFill />
              <span>دانلود از طریق بازار</span>
            </button>
            <button onClick={googlePlayDownload}>
              <IoMdDownload />
              <span>دانلوداز گوگل پلی</span>

            </button>
          </div>
        </div>
      </div>



      <Footer />
    </>


  )
}