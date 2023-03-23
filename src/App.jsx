import { useState, useRef } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const inputRef = useRef(null)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Add bottoms-up animation',
            done: false
        },
        {
            id: 2,
            text: 'Edit task text',
            done: false
        },
        {
            id: 3,
            text: 'Add delete all completed tasks options',
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

    // Delete Completed Task
    const deleteCompletedTask = () => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => {
                return !task.done
            })
        })
    }

    return (
        <div className='App'>
            <Header
                day='Thursday'
                date='March 23, 2023'
                taskLength={tasks.length}
                deleteCompletedTask={deleteCompletedTask}
            /> 
            {tasks.length > 0
                ? <Tasks 
                      tasks={tasks} 
                      deleteTask={deleteTask} 
                      toggleCompletion={toggleCompletion}
                  />
                : <p className='no-tasks'>No tasks yet!</p>
            }
            <AddTask addTask={addTask} />
        </div>
    )
}

export default App
