import './TaskCard.css'

const TaskCard = ({task, handleDelete}) => {
  return (
    <div>
        <li key={task.id} className={task.status === false ? "incomplete" : "complete"}>
            <span >{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
    </div>
  )
}

export default TaskCard
