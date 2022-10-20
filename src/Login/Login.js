import React from 'react'
import { Link } from 'react-router-dom'
import style from './styleLogin.module.css'
export default function Login () {
    return (
        <div className={`${style.containerLogin}`}>
            <div className={`${style.formsContainer}`}>
                <div className={`${style.signinSignup}`}>
                    <form action="#" className={`${style.signInForm}`}>
                        <h2 className={`${style.title}`}>Sign in</h2>
                        <div className={`${style.inputField}`}>
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={`${style.inputField}`}>
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" defaultValue="Login" className={`${style.btn} solid`} />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className={`${style.socialMedia}`}>
                            <a href="#" className={`${style.socialIcon}`} >
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className={`${style.socialIcon}`} >
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className={`${style.socialIcon}`} >
                                <i className="fab fa-google" />
                            </a>
                            <a href="#" className={`${style.socialIcon}`} >
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </form >

                </div >
            </div >
            <div className={`${style.panelsContainer}`}>
                <div className={`${style.panel} ${style.leftPanel}`}>
                    <div className={`${style.content}`}>
                        <h3>New here ?</h3>
                        <p className="text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <Link to='/register'>
                            <button className={`${style.btn} ${style.transparent}`} id="sign-up-btn">
                                Sign up
                            </button>
                        </Link>
                    </div>
                    {/* <img src="images/log.svg" className="image" alt /> */}
                </div>

            </div>
        </div >


    )
}
