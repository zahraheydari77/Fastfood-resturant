import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../../Cpomponents/Navbar/Navbar";
import Footer from '../../Cpomponents/Footer/Footer'
import ContactBox from "../../Cpomponents/ContactBox/ContactBox";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFax } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../../Cpomponents/Form/Button";
import { requiredValidator, minValidator, maxValidator, emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Input from "../../Cpomponents/Form/Input";

export default function Contact() {

  const [formState, onInputHandler] = useForm({
    username: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    msg: {
      value: '',
      isValid: false
    },
  }, false);

  const sendMsg = (event) => {
    event.preventDefault()

    const newMsg = {
      username:formState.inputs.username.value,
      email:formState.inputs.email.value,
      msg:formState.inputs.msg.value
    }

    fetch('https://fastfood-resturant.vercel.app/msg', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newMsg)
    }).then(res => {
      console.log(res)
    })
  }

  return (
    <>
      <div className="main-nav">
        <div className="container_navbar">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <div className="boxes-container">
          <ContactBox icon={<FaLocationDot />} title={'آدرس دفتر اصلی'} desc={'ایران، تهران، خیابان سهروردی شمالی، نبش کوچه نیکو قدم'} />
          <ContactBox icon={<FaPhoneFlip />} title={"تماس"} desc={'021-56437890'} />
          <ContactBox icon={<FaFax />} title={"فکس"} desc={'1-564-338-9087'} />
          <ContactBox icon={<MdEmail />} title={"ایمیل"} desc={'masterfood@gmail.com'} />
        </div>
        <div className="contact-form-container">
          <h3 className="contact-h3">
            با ما در ارتباط باشید
          </h3>
          <form className="contact-form">
            <div className="contact-name">
            <Input
                  id="username"
                  className="contact-input"
                  type='text'
                  placeholder='نام کاربری خود را وارد کنید'
                  element='input'
                  validations={[
                    requiredValidator(),
                    minValidator(8),
                    maxValidator(20)
                  ]}
                  onInputHandler={onInputHandler}
                />
              <label className="contact-label">نام کاربری</label>
            </div>

            <div className="contact-email">
            <Input
                  id="email"
                  className="contact-input"
                  type='text'
                  placeholder='ایمیل  خود را وارد کنید'
                  element='input'
                  validations={[
                    requiredValidator(),
                    emailValidator()
                  ]}
                  onInputHandler={onInputHandler}
                />
              <label className="contact-label"> ایمیل</label>
            </div>

            <div className="contact-msg">
            <Input
                  id="msg"
                  className="contact-text-area"
                  type='text'
                  placeholder='سوال و نظرات خود را وارد کنید"'
                  element='textarea'
                  validations={[
                    requiredValidator(),
                  ]}
                  onInputHandler={onInputHandler}
                />
    
              <label className="contact-label"> متن پیام</label>
            </div>
            <Button
              className={`contact-btn ${formState.isFormValid ? 'btn_success' : 'btn_error'}`}
              type='submit'
              onClick={sendMsg}
              disabled={!formState.isFormValid}
            >
           ارسال پیام
            </Button>
          
            <img className="contact-img" src="./img/chef.png" />

          </form>
        </div>
      </div>
      <Footer />

    </>

  )
}