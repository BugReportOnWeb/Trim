const currentDate = new Date();

export const [ day, date, month, year ] = [
    currentDate.getDay(),
    currentDate.getDate(),
    currentDate.getMonth(),
    currentDate.getFullYear()
]

export const days = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

export const months = [
    'January', 'Febuary', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
]

export const defaultTasks = [
        {
            id: 1,
            text: 'Add github collaboration footer',
            done: false
        },
        {
            id: 2,
            text: 'Fix add task button bug on mobile',
            done: true
        },
        {
            id: 3,
            text: 'Structure const data',
            done: true
        }
]
