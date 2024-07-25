import { useState } from 'react'
import './AddTask.css'

const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue ] = useState("");
    const handleReset = () => {
        setTaskValue('');
        setProgress(false)
    }
    const [progress, setProgress] = useState(false)
    const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
        id : Math.floor(Math.random() * 1000),
        name : taskValue,
        complete: Boolean(progress)
    }

      setTasks([...tasks, task]);
  
    
    handleReset();
}


  return (
    <section className='add-task'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Add Task</label>
        <input onChange={(event) => setTaskValue(event.target.value)} type="text" placeholder='Enter you task ' name='task' id='task' autoComplete='on' value={taskValue}/>
        <select onChange={(event) => setProgress(event.target.value)} value={progress}>
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
        </select>
        <button type='submit'>Add Task</button>
      </form>
      <span onClick={handleReset}>Reset</span>
      <p>{taskValue}</p>
    </section>
  )
}

export default AddTask
