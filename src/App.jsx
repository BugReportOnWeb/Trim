import { useState, useRef, useMemo, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const inputRef = useRef(null)
    const currentDate = new Date();

    const [ date, month, year, day ] = [
        currentDate.getDate(),
        currentDate.getMonth(),
        currentDate.getFullYear(),
        currentDate.getDay()
    ]

    const days = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    const months = [
        'January', 'Febuary', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ]

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Add bottoms-up animation',
            done: true
        },
        {
            id: 2,
            text: 'Page change animation',
            done: true
        },
        {
            id: 3,
            text: 'Structure const data',
            done: false
        },
    ])

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
                day={`${days[day]}`}
                date={`${months[month]} ${date}, ${year}`}
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
