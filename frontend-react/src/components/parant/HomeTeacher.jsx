import TeacherDashboard from "./TeacherDashboard"
import Teacher from "./Teacher";


const HomeTeacher = () => {
  return (
    <>
    <h1 className='text-light text-center'>Hi MR.DOE Welcom back</h1>
    <hr class="animated-hr"/>
    <div className="container-fluid mt-4">
      <div className='row justify-content-center'>
      <div className="col-md-4">
        {<TeacherDashboard />}
      </div>
      <div className="col-md-8">
        {<Teacher />}
      </div>
    </div>
    </div>

    
    </>
  )
}

export default HomeTeacher