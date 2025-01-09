import React from 'react'
import Header from '../Components/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../Others/TaskListNumber'

const Emp = () => {
  return (
    <div className='bg-[#1c1c1c]'>
        {/* <Header changeUser={props.changeUser} data={props.dataa}/> */}
        {/* <TaskListNumber data={props.dataa}/> */}
        {/* <TaskList data={props.dataa}/> */}
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default Emp