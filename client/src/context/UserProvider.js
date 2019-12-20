import React, { useState } from 'react'
import axios from 'axios'
// import { config } from 'dotenv/types';

export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props){

    const initState= {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        posts: [],
        userPosts: []

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
            .catch(err => console.log(err))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            posts: [],
            userPosts: []
        })
    }
    const getAllPublicPosts = () => {
        userAxios.get("/post")
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                posts: res.data
            }))
        })
        .catch(err =>console.log(err))
    } 

    const getAllPosts = () => {
        userAxios.get("/api/post")
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                posts: res.data
            }))
        })
        .catch(err =>console.log(err))
    } 

    const getUserPosts = () => {
        userAxios.get("/api/post/user")
        .then(res => {
            setUserState(prevUserState => ({
                ...prevUserState,
                userPosts: res.data
            }))
        })
        .catch(err =>console.log(err))
    }

    const poster = (post) => {
        userAxios.post('/api/post', post)
        .then(res => {
            getUserPosts()
        })
    }

    return(
        <UserContext.Provider
            value={{
                user: userState.user,
                token: userState.token,
                posts: userState.posts,
                userPosts: userState.userPosts,
                signup,
                login,
                logout,
                getAllPosts,
                getUserPosts,
                getAllPublicPosts,
                poster
            }}>
            { props.children }
        </UserContext.Provider>
    )
}


export default UserProvider