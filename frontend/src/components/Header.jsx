import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='container'>
            <Link to="/" >
                <h1>Todos App</h1>
            </Link>

        </div>
    </header>
  )
}

export default Header