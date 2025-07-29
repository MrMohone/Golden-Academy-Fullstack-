import ParentDashboard from "./parentDashboard"
import ParentProfile from "./parentProfile";


const MainParentPage = () => {
  return (
    <>
    <h1 className='text-light text-center'>Hi MR.DOE Parent Welcom back</h1>
    <hr class="animated-hr"/>
    <div className='row justify-content-center text-center container-fluid my-3'>
      <div className="col-md-4 ">
        {<ParentDashboard />}
      </div>
      <div className="col-md-8">
        {<ParentProfile />}
      </div>

    </div>

    
    </>
  )
}

export default MainParentPage