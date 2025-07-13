import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
    return (
        <>
            <Header />
            <TaskListNumbers/>
            <TaskList/>

        </>
    )
}

export default EmployeeDashboard