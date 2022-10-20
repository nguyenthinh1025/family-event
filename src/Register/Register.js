import React from 'react'
import { Link } from 'react-router-dom'
import style from './../Login/styleLogin.module.css'
export default function Register () {
    return (
        <div className={`${style.containerLogin}`}>
            <div className={`${style.formsContainer}`}>
                <div className={`${style.signinSignup}`}>
                    <form action="#" className={`${style.signUpForm}`}>
                        <h2 className={`${style.title}`}>Sign up</h2>
                        <div className={`${style.inputField}`}>
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={`${style.inputField}`}>
                            <i className="fas fa-envelope" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={`${style.inputField}`}>
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className={`${style.btn} solid`} defaultValue="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className={`${style.socialMedia}`}>
                            <a href="#" className={`${style.socialIcon}`}>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className={`${style.socialIcon}`}>
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className={`${style.socialIcon}`}>
                                <i className="fab fa-google" />
                            </a>
                            <a href="#" className={`${style.socialIcon}`}>
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${style.panelsContainer}`}>
                <div className={`${style.panel} ${style.rightPanel}`}>
                    <div className={`${style.content}`}>
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <Link to='/login'>
                            <button className={`${style.btn} ${style.transparent}`} id="sign-in-btn">
                                Sign in
                            </button>
                        </Link>
                    </div>
                    {/* <img src="images/register.svg" className="image" alt /> */}
                </div>
            </div>
        </div>
    )
}
