import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../Components/BlogCard'
import ProductCard from '../Components/ProductCard'
import SpecialProduct from '../Components/SpecialProduct'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative '>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner' />

                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>ipad s13+ Pro.</h5>
                  <p>FROM $999.00 or $41.62</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between gap-10 align-items-center'>
                <div className='small-banner position-relative '>
                  <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main-banner' />

                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>ipad s13+ Pro.</h5>
                    <p>FROM $999.00 <br/> or $41.62</p>

                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main-banner' />

                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>ipad s13+ Pro.</h5>
                    <p>FROM $999.00 <br/> or $41.62</p>

                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main-banner' />

                  <div className='small-banner-content position-absolute'>
                    <h4>Best sale</h4>
                    <h5>ipad s13+ Pro.</h5>
                    <p>FROM $999.00 <br/> or $41.62</p>

                  </div>
                </div>
                <div className='small-banner position-relative '>
                  <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main-banner' />

                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>bY ipad here</h5>
                    <p>FROM $999.00 <br/> or $41.62</p>

                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services'/>

                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all order over 1000TK</p>
                  </div>
                </div>
                <div className=' d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services'/>

                  <div>
                    <h6>Daily Surprise OFFERS</h6>
                    <p className='mb-0'>Save up to 25%</p>
                  </div>
                </div>
                <div className=' d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services'/>

                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with in expert</p>
                  </div>
                </div>
                <div className=' d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services'/>

                  <div>
                    <h6>Affordable Price</h6>
                    <p className='mb-0'>Get Factory Price</p>
                  </div>
                </div>
                <div className=' d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services'/>

                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protect Payment</p>
                  </div>
                </div>
                

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categorise d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Music</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/headphone.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/tv.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Music</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/headphone.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/tv.jpg' alt='camera'/>
                  </div>
                </div>
                <div className='d-flex align-items-center '>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <div>
                    <img src='images/camera.jpg' alt='camera'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wraper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Feature Colection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
           
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <h3 className='section-heading'>Special Colection</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
      </section>

      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand' />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className='blog-wrapper py-5 home-wraper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>




    </>
  )
}

export default Home