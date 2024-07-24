import './AddTask.css'

const AddTask = () => {
  return (
    <div className='add-task'>
      <form>
        <label htmlFor="Add Task"></label>
        <input type="text" placeholder='Enter you task ' autoComplete='on' />
        <button>Add Task</button>
      </form>
      <span>Reset</span>
    </div>
  )
}

export default AddTask
