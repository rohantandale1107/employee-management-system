import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/Tasklist/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider'


const App = () => {

  // useEffect(() => {

  //   setLocalStorage();
  //     getLocalStorage()

  // }, )




  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext);
 

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')

    }
    else if ( authData &&  authData.employees.find((e)=> email == e.email && password == e.password)) {
      setUser('employee')

    }
    else {
      alert('Invalid credentials')
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App