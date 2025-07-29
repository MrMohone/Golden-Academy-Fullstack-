import React from 'react'

const NotFoundePage = () => {
  return (
    <>
      <div className='container align-items-top text-center mb-5'>
        <h1 className='text-danger fw-bolder' style={{ fontSize: '122px' }}>404</h1>
        <h2 className='fw-bold'>Page Not Found</h2>
        <p style={{fontSize:'25px'}}>Sorry, the page you are looking for does not exist.</p>
        <p style={{fontSize:'25px'}}>You can go back to the <a style={{textDecoration:'none'}}href="/"><span >home page</span></a> or try again.</p>
      </div>
    </>
  )
}

export default NotFoundePage