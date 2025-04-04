import React from 'react'
import Header from '../Others/Header'
import TaskListnumbers from '../Others/TaskListnumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskListnumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard