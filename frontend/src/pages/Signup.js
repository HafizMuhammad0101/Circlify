import React from 'react'

function Signup() {
    return (
        <section className='container-fluid formParent'>
            <div className='row justify-content-center align-items-center h100'>
                <div className='col-lg-8'>
                    <div className='card bg-form bg-dark py-3'>
                        <h1 className='text-white fw-600 text-center'>Signup</h1>
                        <form className='text-center'>
                            <div className='text-center'>
                                <input placeholder='Enter Your Name' className='formField text-white text-center my-3' type='text'/>
                            </div>
                            <div className='text-center'>
                                <input placeholder='Enter Your Email' className='formField text-white text-center my-3' type='email'/>
                            </div>
                            <div className='text-center'>
                                <input placeholder='Enter Your Password' className='formField text-white text-center my-3' type='password'/>
                            </div>
                            <button className='btn btn-primary px-5'>Signup</button>
                        </form>
                        <p className='text-white text-center my-3'>Or already have an account? <a href='#'>Login</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;