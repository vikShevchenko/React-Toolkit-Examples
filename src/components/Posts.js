import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/post/postSlice'

const Posts = () => {

    const dispatch = useDispatch()

    const posts = useSelector((store) => store.posts.posts)


    const handleClick = () => {
        dispatch(getPosts())
    }
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
                onClick={handleClick}
            >
                Get posts
            </button>
            {posts?.map(post => (<PostItem key={post.title} post={post} />))}

        </div>
    )
}

export default Posts