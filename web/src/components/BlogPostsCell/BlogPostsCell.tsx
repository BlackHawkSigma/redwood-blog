import BlogPost from 'src/components/BlogPost'
export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Suche die neuesten News...</div>

export const Empty = () => <div>...hmmm, nichts gefunden</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return posts.map((post) => <BlogPost key={post.id} post={post} />)
}
