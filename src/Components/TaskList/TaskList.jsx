import AddTask from '../AddTask/AddTask'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.css'
import { useState } from "react"

const TaskList = ({title}) => {
    const [tasks, setTasks] = useState([
        {id: 2021, name:'Write React', status: false},
        {id: 2022, name:'Start Writing Tailwind', status: true},
        {id: 2023, name:'Update Resume', status: false}
      ])
      const [show, setShow] = useState(true)
      function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id))
      } 

  return ( 
    <div>
      <AddTask />
      <h1>{title}</h1>
      <ul>
        <button onClick={() => setShow(!show)}>Toogle</button>
        {show && tasks.map((task) => (
          <TaskCard key={task.id} task = {task} handleDelete={handleDelete}/>

        ))}
      </ul>
      
    </div>
  )
}

export default TaskList
