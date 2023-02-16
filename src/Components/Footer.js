import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
 <>
 <footer className='py-4'>
    <div className='container-xxl'>
        <div className='row align-item-center'>
            <div className='col-5'>
                <div className='footer-top-data d-flex gap-30 align-item-center'>
                    <img src='images/newsletter.png' alt=''/>
                    <h2 className='mb-0 text-white'>Sing Up for news letter</h2>
                </div>
            </div>
            <div className='col-7'>
            <div className='col-5'>
                            <div class="input-group ">
                                <input type="text" class="form-control py-1" placeholder="Your email Address" aria-label="Your email Address" aria-describedby="basic-addon2" />
                                <span class="input-group-text p-3" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
            </div>
        </div>
    </div>
 </footer>
 <footer className='py-4'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-4'>
                <h4 className='text-white mb-3'>Contact us</h4>
                <div>
                    <address className='text-white fs-6'>
                        homN: 123 ,Dhaka,Savar,Ashuli, <br/> Bangladesh <br/>
                        pinCode:123487
                    </address>
                    <a href='tel:+880 01400320506 ' className='text-white mb-1'>
                        002389834747
                    </a>

                    <a href='mailTo:mamun@gmail.com' className='mt-3 d-block mb-0 text-white'>
                        mamun@gmail.com
                    </a>
                    <div className='social_icons d-flex align-items-center gap-30 mt-4 '>
                        <a className='text-white' href='#'>
                            <BsLinkedin className='fs-4'/>
                        </a>
                        <a className='text-white' href='#'>
                        <BsGithub className='fs-4'/>
                        </a>
                        <a className='text-white' href='#'>
                            <BsYoutube className='fs-4'/>
                        </a>
                        <a className='text-white' href='#'>
                            <BsInstagram className='fs-4'/>
                        </a>
                     
                    </div>

                </div>
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
                    <Link className='text-white py-2 mb-1'>Privvicy polocy</Link>
                    <Link className='text-white py-2 mb-1'>Refund polycy</Link>
                    <Link className='text-white py-2 mb-1'>Shiping polocy</Link>
                    <Link className='text-white py-2 mb-1'>Term and condition</Link>
                    <Link className='text-white py-2 mb-1'>Blogs</Link>
                </div>
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Accounts</h4>
            <div className='footer-links d-flex flex-column'>
                    <Link className='text-white py-2 mb-1'>About us</Link>
                    <Link className='text-white py-2 mb-1'>Faq</Link>
                    <Link className='text-white py-2 mb-1'>Contact</Link>
                </div>
            </div>
            <div className='col-2'>
            <h4 className='text-white mb-4'>Quit Links</h4>
                <div className='footer-links d-flex flex-column'>
                    <Link className='text-white py-2 mb-1'>Laptop</Link>
                    <Link className='text-white py-2 mb-1'>Headphone</Link>
                    <Link className='text-white py-2 mb-1'>Tablet</Link>
                    <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
            </div>
        </div>
    </div>

 </footer>
 <footer className='py-4'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12 '>
                <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Mamun oR Rashid{''} </p>
            </div>
        </div>
    </div>
 </footer>
 
 </>
  )
}

export default Footer