import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './Layout/HomePageLayout'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePageLayout/>} />
      </Routes>
    </>
  )
}

export default App
