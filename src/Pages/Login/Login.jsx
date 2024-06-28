import React from "react";
import Input from "../../Cpomponents/Form/Input";
import "./Login.css";
import Navbar from "../../Cpomponents/Navbar/Navbar";
import Footer from '../../Cpomponents/Footer/Footer';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../Cpomponents/Form/Button";
import { requiredValidator, minValidator, maxValidator, emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate()
  const [formState, onInputHandler] = useForm({
    username: {
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

  const loginNewUser = (event) => {
    event.preventDefault()
    Swal.fire({
      title: "با موفقیت وارد شدید",
      text: ` خوش اومدی ${formState.inputs.username.value}`,
      icon: "success",
      confirmButtonText: 'خیلی هم عالی'
    }).then(value => {
      navigate('/')
    })
    console.log('login')
  }
  return (
    <>
      <>
        <div className="main-nav">
          <div className="container_navbar">
            <Navbar />
          </div>
        </div>
        <div className="parent">
          <div className="form_container-2">
            <div className="title_section"><h4>صفحه ی ورود به سایت</h4></div>

            <form action="#" className="login_form-2">
              <div className="login-form__username">
                <Input
                  id="username"
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
              <div className="login-form__password">
                <Input
                  id="password"
                  className='input'
                  type='password'
                  placeholder='پسورد خود را وارد کنید'
                  element='input'
                  validations={[
                    requiredValidator(),
                    minValidator(8),
                    maxValidator(18)
                  ]}
                  onInputHandler={onInputHandler}
                />
                <label className="label">پسورد</label>
              </div>
              <ReCAPTCHA className="recaptcha-2"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChangeHandler}
              />
              <Button
                className={`btn ${formState.isFormValid ? 'btn_success' : 'btn_error'}`}
                type='submit'
                onClick={loginNewUser}
                disabled={!formState.isFormValid}
              >
                وارد شوید
              </Button>

              <p className="p-tag">اگر عضو نیستید <Link className="link" to="/signin">ثبت نام </Link> کنید</p>
            </form>

          </div>
        </div>
        <Footer />
      </>
    </>
  )
}