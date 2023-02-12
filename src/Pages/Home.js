import React from 'react'
import { Link } from 'react-router-dom'

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
    </>
  )
}

export default Home