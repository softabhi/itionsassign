import React from 'react'
import { FaYoutube,FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className='container bg-black h-100'>
            <div className="row py-3">
                <div className="col-6">
                <p className='text-white'>Copyright © 2024 - All right reserved</p>
                </div>

                <div className="col-6 text-white d-flex justify-content-evenly">
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaFacebookF/>
                </div>
            </div>
           
        </div>
    )
}

export default Footer
