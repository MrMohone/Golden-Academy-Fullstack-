import React from 'react'
import Button from './Button'


const Main = () => {
  return (
   <>
   <div className='container'>
    <div className="p-5 text-center bg-light-dark rounded">
      <h3 className="welcome-text">
Welcome to Golden Academy School Management System
Empowering Education, Enhancing Excellence
Golden Academy is committed to providing a world-class education to our students. 
Our school management system is designed to make it easy for students, parents,
 and staff to stay connected and manage day-to-day activities.</h3> <br />
       <h3 className='text-light mb-3'>Login or Register to Get Started</h3>
       <Button text='Explore Now' class='btn-outline-info' url='/dashboard'/>
    </div>
   </div>
   </>
  )
}

export default Main