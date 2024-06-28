import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Contact() {
    return (
        <>
<footer>
<div className="container">
                <div className="grid_section_footer">
                    <div className="info_site_footer">
                        <div className="logo_footer">
                            <img src="./img/logo.png"></img>
                            <h6> مستر فود</h6>
                        </div>
                        <ul>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTelegram /></a></li>
                        </ul>
                    </div>
                    <div className="link_footer">
                        <h5>
لینک های مفید
                        </h5>
                        <ul>
                            <li><Link to="/">خانه</Link></li>
                            <li><Link to="/menu">منو</Link></li>
                            <li><Link to="/contact">ارتباط با ما</Link></li>


                        </ul>
                    </div>

                    <div className="link_footer">
                        <h5>
ساعت های کاری
                        </h5>
                        <ul>
                          <li>دوشنبه - چهارشنبه: 9:00 - 23:00</li>
                          <li>شنبه: 9:00 - 16:00</li>
                          <li>یکشنبه: 12:00 - 18:00</li>



                        </ul>
                    </div>
                </div>
            </div>
</footer>
        </>

    )
}