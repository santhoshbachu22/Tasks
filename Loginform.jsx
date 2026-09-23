import { useState } from 'react';

function LoginForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoggedIn(true)
    }

    const handleReset = () => {
        setUsername("")
        setPassword("")
        setLoggedIn(false)
    }

    return(
        <div className='p-4'>
            <form onSubmit={handleSubmit}>

                <div className='mb-2'>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        className='border p-1'
                    />
                </div>

                <div className='mb-2'>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        className='border p-1'
                    />
                </div>

                <button type="submit" className='bg-orange-500 p-2 mr-2'>
                    Login
                </button>

                <button type="button" onClick={handleReset} className='bg-gray-500 p-2'>
                    Reset
                </button>

            </form>

            {loggedIn ? (
                <div className='mt-4 p-2 border'>
                    <p>Logged in successfully!</p>
                    <p>Username: {username}</p>
                </div>
            ) : null}

        </div>
    );
}

export default LoginForm;