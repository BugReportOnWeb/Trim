import Task from './Task'

const Tasks = ({ tasks, deleteTask, toggleCompletion }) => {
    return (
        <div className='tasks'>
            {tasks.map(task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    deleteTask={deleteTask} 
                    toggleCompletion={toggleCompletion}
                />
            ))}
        </div>
    )
}

export default Tasks
