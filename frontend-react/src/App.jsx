import './assets/css/style.css'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import HomeTeacher from './components/parant/HomeTeacher'
import HomeStudent from './components/student/HomeStudent'
import NotFoundePage from './NotFoundePage'




function App() {

  return (
    <>
    <AuthProvider >  {/*AuthProvider is available for all context */}
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/register' element={<PublicRoute><Register /></PublicRoute>}/>
            <Route path='/login' element={<PublicRoute><Login /></PublicRoute>}/>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>  {/* available for only logged in users  */}
            <Route path='/teacher' element={<HomeTeacher />} />
            <Route path='/student' element={<HomeStudent />} />
            <Route path='*' element={<NotFoundePage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App

