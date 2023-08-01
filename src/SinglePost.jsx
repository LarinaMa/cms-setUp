import { getPostData } from './utils'
import { useParams } from 'react-router-dom'
function SinglePost() {
  const { slug } = useParams()
  const post = getPostData(slug)
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default SinglePost
