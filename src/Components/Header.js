import React from 'react'

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
                    Hotline: <a href='tel:+088 023837'>0140000000</a>
                </p>
            </div>
           </div>
        </div>
     </header>
    </>
  )
}

export default Header