import React from 'react'

const StudentDashboard = () => {
  return (
    <>
    <div className='m-2 mt-2 p-2 bg-light-dark rounded shadow-lg d-flex flex-column align-items-start'>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-3 w-100 rounded text-start px-4">Dashboard</button></a>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-3 w-100 rounded text-start px-4">Courses</button></a>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-3 w-100 rounded text-start px-4">Grades</button></a>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-3 w-100 rounded text-start px-4">Schedule</button></a>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-3 w-100 rounded text-start px-4">Attendance</button></a>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-3 w-100 rounded text-start px-4">Profile</button></a>
        <a href="#" className='w-100'> <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold  w-100 rounded text-start px-4">Your Note</button></a>
    </div>
    </>
  )
}

export default StudentDashboard