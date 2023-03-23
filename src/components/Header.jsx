const Header = ({ day, date }) => {
    return (
        <div className='header'>
            <div className='day'>
                <h1>{day}</h1>
            </div>

            <div className='date'>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Header
