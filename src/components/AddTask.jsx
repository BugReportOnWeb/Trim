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
            <Form addTask={handleAddTask} showAddTaskForm={showAddTaskForm} />
            <button
                className={`add-task-button ${showAddTaskForm ? 'form-button' : ''}`}
                onClick={() => setShowAddTaskForm(prevState => !prevState)}
            ><TiPlus /></button>
        </>
    )
}

export default AddTask
