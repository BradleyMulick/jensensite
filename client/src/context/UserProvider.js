import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

function UserProvider(props){

    const initState= {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || ""
    }

    const [userState, setUserState] = useState(initState)

    const signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(res.data)
            })
            .catch(err => console.log(err))
    }
    
    const login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                setUserState(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: ""
        })
    }

    return(
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                signup: signup,
                login: login,
                logout: logout
            }}>
            { props.children }
        </UserContext.Provider>
    )
}


export default UserProvider