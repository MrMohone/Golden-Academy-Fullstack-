import React from 'react'

const ParentDashboard = () => {
    

  return (
    
    <>
    <div className='border m-4 p-4 bg-light-dark rounded shadow d-flex flex-column align-items-start'>
      <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Dashboard</button>
      <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Students List</button>
      <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Marks</button>
      <button type="button" class="dashboard-card gradient-2 btn btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Grade</button>
      <button type="button" class="dashboard-card gradient-2 pink btn btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Schedule</button>
      <button type="button" class="dashboard-card gradient-2 btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Attendance</button>
      <button type="button" class="dashboard-card gradient-2 btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Profile</button>
      <button type="button" class="dashboard-card gradient-2 btn-lg btn-primary text-white fw-bold mb-2 w-100 rounded text-start px-4">Personal Note</button>
    </div>
    </>
  )
}

export default ParentDashboard