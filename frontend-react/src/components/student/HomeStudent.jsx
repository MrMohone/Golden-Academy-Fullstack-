import React from 'react'
import Student from './Student'
import StudentDashboard from './StudentDashboard'
import Teacher from '../parant/Teacher'

const HomeStudent = () => {
  return (
    <>
    <h1 className='text-light text-center'>Welcome to Student Dashboard</h1>
    <hr class="animated-hr"/>
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-md-4 justify-content-center ">
                {<StudentDashboard />}
            </div>
            <div className="col-md-8">
                {<Student />}
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeStudent