import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFax } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./ContactBox.css";

  export default function ContactBox({icon,title,desc}) {
    return (
<>

    <div className="contact-box">
    <div className="contact-icon">
        {icon}
        </div>
    <h2 className="contact-h2">
   {title}
    </h2>
    <p className="contact-p-tag">
   {desc}
    </p>
    </div>


</>
  )
}