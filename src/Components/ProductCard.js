import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const ProductCard = () => {
  return (
    <div className='col-3'>
      <Link className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link>
           <img src='images/wish.svg' alt='wish'/>
          </Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product img' />
          <img src='images/camera.jpg' className='img-fluid' alt='product img' />
          
          </div>

          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              kids headdphone 10 pack multi clored for student
            </h5>
            <ReactStars
              count={5}

              size={24}
              value='3'
              edit='true'
              activeColor="#ffd700"
            />
            <p className='price'>500BDT</p>

          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
              <img src='images/prodcompare.svg' alt='compare'/>

              </Link>
              <Link>
              <img src='images/view.svg' alt='view'/>

              </Link>
              <Link>
              <img src='images/add-cart.svg' alt='addcart'/>

              </Link>
            </div>
            
          </div>
        

      </Link>
    </div>
  )
}

export default ProductCard