import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu () {
    return (
        <div className="menu trans_500">
            <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                <div className="menu_close_container"><div className="menu_close" /></div>
                <div className="logo menu_logo"><Link to="/"><img src="images/logo.png" alt /></Link></div>
                <ul>
                    <li className="menu_item"><Link to="/">home</Link></li>
                    <li className="menu_item"><Link to="/about">about us</Link></li>
                    <li className="menu_item"><Link to="/offers">offers</Link></li>
                    <li className="menu_item"><Link to="/blog">news</Link></li>
                    <li className="menu_item"><Link to="/contact">contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
