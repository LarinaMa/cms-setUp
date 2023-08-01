import { getPosts } from './utils.js'
import { Link } from 'react-router-dom'
function Blog() {
  const posts = getPosts()
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default Blog
