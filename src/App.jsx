
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TaskList from './Components/TaskList/TaskList'
import AddTask from './Components/AddTask/AddTask'



const App = () => {
  const [tasks, setTasks] = useState([])

 

  return (
    <>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList title = 'My To Do List' tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
