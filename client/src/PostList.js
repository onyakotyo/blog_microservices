import React,{useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'



const PostList = () => {

    const [posts, setPosts] = useState({})

    console.log(posts)

    const fetchPosts = async () => {
        const res = await axios.get('http://posts.com:4002/posts')

        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderPosts = Object.values(posts).map(post => {

        return (
            <div 
                className='card' xl={3} lg={4} md={4} sm={12} xxs={12}
                style={{ width: '30%',marginBottom: '20px'}}
                key={post.id}
            >
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentList  comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>

            </div>
)
    })

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderPosts}
    </div>
  )
}

export default PostList