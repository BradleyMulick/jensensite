import React, {useEffect, useContext} from 'react'
import {UserContext} from './context/UserProvider'

function PublicPosts(){
    const { getAllPublicPosts , posts} = useContext(UserContext)
    useEffect(() => {
        getAllPublicPosts()
    },[])
    return(
        <div className="postImages">
        {
            posts.map(post => <img src={post.imgUrl} />)
        }
        </div>
    )
}

export default PublicPosts
