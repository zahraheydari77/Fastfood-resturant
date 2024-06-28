import React from "react";
import Navbar from "../../Cpomponents/Navbar/Navbar";
import Footer from '../../Cpomponents/Footer/Footer';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./SignIn.css";
import Input from "../../Cpomponents/Form/Input";
import Button from "../../Cpomponents/Form/Button";
import { requiredValidator, minValidator, maxValidator, emailValidator, phoneValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export default function SignIn() {
const navigate = useNavigate()
  const [formState, onInputHandler] = useForm({
    username: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    phone: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
  }, false);
  console.log(formState)

  const onChangeHandler = () => {
    console.log('ok')
  }

  const registerNewUser = (event) => {
    event.preventDefault()
    const newUserInfos ={
      name : formState.inputs.username.value,
      email:formState.inputs.email.value,
      phone:formState.inputs.phone.value ,
      password: formState.inputs.password.value
    };

    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify(newUserInfos)
    }).then(res=> {
      console.log(res)
   
Swal.fire({
  title: "خوش اومدی",
  text: "کاربر عزیز با موفقیت ثبت نام شدید",
  icon: "success",
  confirmButtonText:'خیلی هم عالی'
}).then(value => {
  navigate('/')
})
    })
    console.log('registerNewUser')
  }
  return (
    <>
      <div className="main-nav">
        <div className="container_navbar">
          <Navbar />
        </div>
      </div>
      <div className="parent">
        <div className="form__container">
          <div className="title__section"><h4> صفحه ی ثبت نام</h4></div>

          <form action="#" className="login_form">
            <div className="login-form_username">
              <Input
                id='username'
                className='input'
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
              <label className="label" >نام کاربری</label>
            </div>
            <div className="login-form_email">
              <Input
                id='email'
                className='input'
                type='text'
                placeholder='ایمیل خود را وارد کنید'
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  emailValidator()
                ]}
                onInputHandler={onInputHandler}
              />
              <label className="label">ایمیل</label>
            </div>
            <div className="login-form_phone">
              <Input
                id='phone'
                className='input'
                type='text'
                placeholder='شماره تماس خود را وارد کنید'
                element='input'
                validations={[
                  requiredValidator(),
                  phoneValidator()
                ]}
                onInputHandler={onInputHandler}
              />
              <label className="label">شماره تماس</label>
            </div>
            <div className="login-form_password">
              <Input
                id='password'
                className='input'
                type='password'
                placeholder=' رمز عبور خود را وارد کنید'
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
                onInputHandler={onInputHandler}
              />
              <label className="label">رمز عبور</label>
            </div>

            <ReCAPTCHA className="recaptcha"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChangeHandler}
            />
            <Button
              className={`btn-2 ${formState.isFormValid ? 'btn_success' : 'btn_error'}`}
              type='submit'
              onClick={registerNewUser}
              disabled={!formState.isFormValid}
            >
              ثبت نام
            </Button>
            <p className="p-tag-2">اگر عضو هستید <Link className="link" to="/login"> وارد </Link> شوید</p>
          </form>

        </div>
      </div>
      <Footer />
    </>
  )
}