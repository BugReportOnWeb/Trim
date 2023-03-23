import { useState } from 'react'
import { TiPlus } from 'react-icons/ti'
import Form from './Form'

const AddTask = ({ addTask }) => {
    const [showAddTaskForm, setShowAddTaskForm] = useState(false)

    const handleAddTask = (task) => {
        setShowAddTaskForm(prevState => !prevState)
        addTask(task)
    }

    return (
        <>
            {showAddTaskForm && <Form addTask={handleAddTask} />}
            <button
                className={`add-task-button ${showAddTaskForm ? 'form-button' : ''}`}
                onClick={() => setShowAddTaskForm(prevState => !prevState)}
            >{showAddTaskForm ? 'Close' : <TiPlus />}</button>
        </>
    )
}

export default AddTask
