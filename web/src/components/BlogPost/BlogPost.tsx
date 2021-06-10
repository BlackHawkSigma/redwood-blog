import { Link, routes } from '@redwoodjs/router'

type BlogPostProps = {
  post: {
    id: number
    title: string
    body: string
    /** Date */
    createdAt: string
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {new Date(post.createdAt).toLocaleString('en-US')}</div>
    </article>
  )
}

export default BlogPost
