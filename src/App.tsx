import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './Layout/HomePageLayout'
import HomePage from './Pages/HomePage'
import UserDashboardLayout from './Layout/UserDashboardLayout'
import UserDashboardPage from './Pages/UserDashboardPage'
import UserClientPage from './Pages/UserClientPage'
import UserInvoicesPage from './Pages/UserInvoicesPage'
import UserTransactionsPage from './Pages/UserTransactionsPage'
import UserSettingsPage from './Pages/UserSettingsPage'


function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<HomePageLayout/>}>
          <Route index element={<HomePage/>} />
        </Route>

        <Route path='/dashboard' element={<UserDashboardLayout/>}>
          <Route index element={<UserDashboardPage/>} />
          <Route path='clients' element={<UserClientPage/>} />
          <Route path='invoices' element={<UserInvoicesPage/>} />
          <Route path='transactions' element={<UserTransactionsPage/>} />
          <Route path='settings' element={<UserSettingsPage/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
