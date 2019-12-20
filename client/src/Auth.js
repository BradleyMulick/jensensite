import React, {useState, useContext} from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from './context/UserProvider.js';

function Auth(){
    const initState = {username: "", password: ""}  
    const {signup} = useContext(UserContext)

    const {login} = useContext(UserContext)

    const [inputs, setInputs] = useState(initState)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value 
        }))
    }

    const handleSignupSubmit = e => {
        e.preventDefault()
        alert(inputs.username + " " + inputs.password)
        signup(inputs)
        
    }
    
    
    const handleLoginSubmit = e => {
        e.preventDefault()
        login(inputs)
        setInputs(initState)
    }
    return (
        <div>
            {/* <AuthForm 
                inputs={inputs}
                handleChange={handleChange}
                handleSubmit={handleSignupSubmit}
                btnText="signup"
            /> */}
            <AuthForm 
                inputs={inputs}
                handleChange={handleChange}
                handleSubmit={handleLoginSubmit}
                btnText="login"
            />
        </div>
    )
}


export default Auth