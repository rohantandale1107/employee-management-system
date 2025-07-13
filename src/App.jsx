import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/Tasklist/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage';


const App = () => {

  // useEffect(() => {

  //   setLocalStorage();
  //     getLocalStorage()

  // }, )

  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if(email=='admin@me.com' && password=='123'){
      console.log('this is admin')
    }
    else if(email == 'user@me.com'&& password == '123'){
      console.log('this is user')
    }
    else{
        alert('Invalid credentials')
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}


      {/* <Login />
      <EmployeeDashboard/> 
      <AdminDashboard/> */}
    </>
  )
}

export default App