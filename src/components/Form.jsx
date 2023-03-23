import { useRef } from 'react'

const Form = ({ addTask }) => {
    const inputRef = useRef(null)

    const handleAddTask = (e) => {
        e.preventDefault()

        const id = Math.floor(Math.random() * 10000) + 1
        const inputValue = inputRef.current.value

        if (inputValue === '') return

        addTask({ id, text: inputValue, done: false })
        inputRef.current.value = ''
    }

    return (
        <form onSubmit={handleAddTask} className='add-task'>
            <h1 className='form-name'>Add Task</h1>
            <input
                ref={inputRef}
                className='form-input' 
                type='text' 
                placeholder='Add your task here...'
            />
        </form>
    )
}

export default Form
