import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/Others/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard/> 
      <TaskList/> */}
      <AdminDashboard/>
    </>
  )
}

export default App