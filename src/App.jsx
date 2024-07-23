import { useState } from "react"
import './App.css'


const App = () => {
  const [tasks, setTasks] = useState([
    {id: 2021, task:'Write React', status: false},
    {id: 2022, task:'Start Writing Tailwind', status: true},
    {id: 2023, task:'Update Resume', status: false}
  ])
  const [show, setShow] = useState(true)
  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id))
  }
 

  return (
    <div>
      <ul>
        <button onClick={() => setShow(!show)}>Toogle</button>
        {show && tasks.map((task) => (
          <li key={task.id} className={task.status === false ? "incomplete" : "complete"}>
            <span >{task.id} - {task.task}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
