import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './Layout/HomePageLayout'
import HomePage from './Pages/HomePage'
import UserDashboardLayout from './Layout/UserDashboardLayout'


function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<HomePageLayout/>}>
          <Route index element={<HomePage/>} />
        </Route>

        <Route path='/dashboard' element={<UserDashboardLayout/>}>
        
        </Route>

      </Routes>
    </>
  )
}

export default App
