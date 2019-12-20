import React, {useEffect, useContext, Component, useState} from 'react'
import {UserContext} from './context/UserProvider'
import AddPostForm from './AddPostForm'


function Profile(){
    
    const initState = {title: "", imgUrl: ""}
    const [inputs, setInputs] = useState(initState)

    // const {poster} = useContext(UserContext)

    const {getUserPosts, userPosts} = useContext(UserContext)
    useEffect(() => {
        getUserPosts()
    }, [])

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value 
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        // poster(inputs)
        setInputs(initState)
    }

    

    
    return(
        <div className="postIt">
            <AddPostForm
                inputs={inputs}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
        {
            userPosts.map(post => <img src={post.imgUrl} />)
        }
        </div>
    )
}

export default Profile