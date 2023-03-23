import { FaTimes } from 'react-icons/fa'

const Task = ({ task, deleteTask, toggleCompletion }) => {
    return (
        <div 
            className={`task ${task.done ? 'completed' : ''}`} 
            onDoubleClick={() => toggleCompletion(task.id)}
        >
            <div className='task-value'>
                {task.text}
            </div>
            <div className='check-button'>
                <FaTimes 
                    className='close-button' 
                    onClick={() => deleteTask(task.id)} 
                />
            </div>
        </div>
    )
}

export default Task
