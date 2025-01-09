import React, { useEffect, useState } from 'react'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const location = useLocation();
    const { id } = location.state || {};


    async function getTasks() {
        try{
            const response = await axios('http://localhost:3000/tasks')
            const allTasks = response.data;
            console.log("gh",response.data)

            const userTasks = allTasks.find((task) => task.user === id)?.tasks || [];
            setTasks(userTasks);
        }catch(e){

        }      
    }

    useEffect(()=>{
        getTasks()
    },[])


    const newTasks = tasks.filter((task) => task.status === 'newTask');
    const completedTasks = tasks.filter((task) => task.status === 'completed');
    const activeTasks = tasks.filter((task) => task.status === 'inProgress');
    const failedTasks = tasks.filter((task) => task.status === 'uncomplete');


  return (
    <div id='tasklist' className=' pr-4 mx-2 w-full mt-10 flex items-center justify-around rounded-md gap-5 flex-nowrap overflow-y-auto overflow-x-auto py-5'>
        {/* <NewTask/>
        <CompleteTask/>
        <AcceptTask/>
        <FailedTask/> */}

        {newTasks.length > 0 &&
        newTasks.map((task, index) => (
          <NewTask key={index} task={task} />
        ))}

        {completedTasks.length > 0 &&
            completedTasks.map((task, index) => (
            <CompleteTask key={index} task={task} />
            ))}

      
        {activeTasks.length > 0 &&
            activeTasks.map((task, index) => (
            <AcceptTask key={index} task={task} />
            ))}

      
        {failedTasks.length > 0 &&
            failedTasks.map((task, index) => (
            <FailedTask key={index} task={task} />
            ))}



    </div>
  )
}

export default TaskList