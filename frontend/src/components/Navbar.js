import React from 'react'

const Navbar = () => {
    return (
        <nav className='container-fluid bg-primary py-2'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-9'>
                    <h1 className='text-white '>Task Manager</h1>
                </div>
                <div className='col-lg-3'>
                    <ul className='d-flex'>
                        <li>
                            <a href='#'>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;