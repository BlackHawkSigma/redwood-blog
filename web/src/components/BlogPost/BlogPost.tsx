import { Link, routes } from '@redwoodjs/router'

const BlogPost: React.FunctionComponent = ({ post }) => {
  return (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {new Date(post.createdAt).toLocaleString()}</div>
    </article>
  )
}

export default BlogPost
