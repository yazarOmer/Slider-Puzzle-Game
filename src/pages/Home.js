import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='homepage'>
        <div className='home_card'>
            <h1 className='title'>Slide Puzzle</h1>

            <div className='levels'>
                <Link to="/beginner" className='level'>LEVEL 1</Link>
                <Link to="/easy" className='level'>LEVEL 2</Link>
                <Link to="/medium" className='level'>LEVEL 3</Link>
                <Link to="/hard" className='level'>LEVEL 4</Link>
            </div>
        </div>
    </div>
  )
}

export default Home