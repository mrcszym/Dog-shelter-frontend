import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import UserPage from './components/UserPage'
import AdminPage from './components/AdminPage'
import ApplicationForm from './components/ApplicationForm'
import UserApplications from './components/UserApplications'
import ApplicationsManagement from './components/ApplicationsManagement'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />}></Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/userpage' element={<UserPage />} />
          <Route path='/applicationform' element={<ApplicationForm />} />
          <Route path='/userapplications' element={<UserApplications />} />
          <Route path='/adminpage' element={<AdminPage />} />
          <Route path='/applicationsmanagement' element={<ApplicationsManagement />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App
