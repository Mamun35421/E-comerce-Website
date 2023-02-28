import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>

            <div className='blog-content'>
                <p className='date'>1-DEC</p>
                <h5 className='title'>A beatiful country</h5>
                <p className='dec'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                <Link to='/' className='button'>
                    Read more
                </Link>

            </div>

        </div>
    </div>
  )
}

export default BlogCard