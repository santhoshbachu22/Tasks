import { useState } from 'react';

function RegistrationForm(){
    const [name, setName] = useState("")
    const [rollNumber, setRollNumber] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleRollNumberChange = (event) => {
        setRollNumber(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleCourseChange = (event) => {
        setCourse(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    const handleReset = () => {
        setName("")
        setRollNumber("")
        setEmail("")
        setCourse("")
        setSubmitted(false)
    }

    return(
        <div className='p-4'>
            <form onSubmit={handleSubmit}>

                <div className='mb-2'>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={handleNameChange} 
                        className='border p-1'
                    />
                </div>

                <div className='mb-2'>
                    <label>Roll Number: </label>
                    <input 
                        type="text" 
                        value={rollNumber} 
                        onChange={handleRollNumberChange} 
                        className='border p-1'
                    />
                </div>

                <div className='mb-2'>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        className='border p-1'
                    />
                </div>

                <div className='mb-2'>
                    <label>Course: </label>
                    <input 
                        type="text" 
                        value={course} 
                        onChange={handleCourseChange} 
                        className='border p-1'
                    />
                </div>

                <button type="submit" className='bg-orange-500 p-2 mr-2'>
                    Submit
                </button>

                <button type="button" onClick={handleReset} className='bg-gray-500 p-2'>
                    Reset
                </button>

            </form>

            {submitted ? (
                <div className='mt-4 p-2 border'>
                    <p>Registered Successfully!</p>
                    <p>Name: {name}</p>
                    <p>Roll Number: {rollNumber}</p>
                    <p>Email: {email}</p>
                    <p>Course: {course}</p>
                </div>
            ) : null}

        </div>
    );
}

export default RegistrationForm;