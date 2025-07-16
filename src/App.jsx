import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/Tasklist/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider'


const App = () => {

  useEffect(() => {

    setLocalStorage();
      // getLocalStorage()

  }, )




  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext);


//  useEffect(() => {
//    if(authData){
//     const loggedInUser = localStorage.getItem('loggedInUser');
//    }
 
   
//  }, [authData])
 

const handleLogin = (email, password) => {
  if (
    authData &&
    authData.admin &&
    authData.admin.find((e) => email === e.email && password === e.password)
  ) {
    setUser("admin");
  } else if (
    authData &&
    authData.employees &&
    authData.employees.find((e) => email === e.email && password === e.password)
  ) {
    setUser("employee");
  } else {
    alert("Invalid credentials");
  }
};



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App