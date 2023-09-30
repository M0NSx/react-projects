import { useState } from 'react'
import './Signup.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function Signup() {

    return (
        <>
        <div className='container'>
            <div className='container-box'>
                <form>
                    <h1>Register</h1>
                    <div className='container-input' >
                        <div className='input-box' >
                            <i className="bi bi-person"></i>
                            <input type="text" name='nickname' placeholder='Insert a Nickname'/>
                        </div>
                        <div className='input-box' >
                            <i className="bi bi-envelope"></i>
                            <input type="email" name='email' placeholder='Email'/>
                        </div>
                        <div className='input-box' >
                            <i className="bi bi-key"></i>
                            <input type="password" name='password' placeholder='Password'/>
                        </div>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup
