import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>
                                Shipping Over $100 & Free returns
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline: <a className='text-white' href='tel:+088 023837'>+0140000000</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white'>Dev corner</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div class="input-group ">
                                <input type="text" class="form-control py-2" placeholder="Search product here..." aria-label="Search product here" aria-describedby="basic-addon2" />
                                <span class="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/compare.svg' alt='' />
                                        <p className='mb-0'> compare <br /> products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/wishlist.svg' alt='' />
                                        <p className='mb-0'> Favorite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/user.svg' alt='' />
                                        <p className='mb-0'> Log in <br /> My account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='images/cart.svg' alt='' />
                                        <div className='d-flex flex-colum gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                         <img src='images/menu.svg' alt='' /><span className='me-5 d-inline-block'>Show Categories</span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/'>Our Store</NavLink>
                                        <NavLink to='/'>Blog</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header