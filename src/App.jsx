import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskList from './components/Others/TaskList'

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <EmployeeDashboard/> 
      <TaskList/>
    </>
  )
}

export default App