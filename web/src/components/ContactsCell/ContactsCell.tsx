import Contact from 'src/components/Contact'

import type { ContactsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      name
      message
      createdAt
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }: CellSuccessProps<ContactsQuery>) => {
  return (
    <ul>
      {contacts.map((item) => {
        return <Contact key={item.id} contact={item} />
      })}
    </ul>
  )
}
