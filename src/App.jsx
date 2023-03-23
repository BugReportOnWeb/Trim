import { useState, useRef } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const inputRef = useRef(null)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Task one',
            done: true
        },
        {
            id: 2,
            text: 'Another Task',
            done: false
        },
        {
            id: 3,
            text: 'Task three',
            done: false
        },
    ])

    // Deleting Task
    const deleteTask = (id) => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => {
                return task.id !== id
            })
        })
    }

    // Adding Task
    const addTask = (newTask) => {
        setTasks(prevTasks => {
            return [...prevTasks, newTask]
        })
    }
    
    // Toggle Completion
    const toggleCompletion = (id) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                return task.id === id ? { ...task, done: !task.done } : task
            })
        })
    }

    return (
        <div className='App'>
            <Header day='Thursday' date='March 23, 2023' /> 
            <Tasks 
                tasks={tasks} 
                deleteTask={deleteTask} 
                toggleCompletion={toggleCompletion} 
            />
            <AddTask addTask={addTask} />
        </div>
    )
}

export default App