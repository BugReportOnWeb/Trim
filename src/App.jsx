import { useState, useRef, useMemo, useEffect } from 'react'
import * as Constants from './constants/constants'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [tasks, setTasks] = useState(Constants.defaultTasks)
    const inputRef = useRef(null)

    // TODO: Recheck on this function logic
    // 1. Function renders even on no change to 'tasks'
    // 2. Gives output 2 times when 'console.log' inside function
    const disabled = useMemo(() => {
        return tasks.map(task => {
            return task.done 
        }).includes(true)
    }, [tasks])

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

    // Delete Completed Task(s)
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
                day={`${Constants.days[Constants.day]}`}
                date={`${Constants.months[Constants.month]} ${Constants.date}, ${Constants.year}`}
                taskLength={tasks.length}
                deleteCompletedTask={deleteCompletedTask}
                disabled={disabled}
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
