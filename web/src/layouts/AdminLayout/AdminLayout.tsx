import { Link, routes } from '@redwoodjs/router'

const AdminLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <h1>Danger Zone</h1>
      <Link to={routes.home()}>back Home</Link>
      {children}
    </>
  )
}

export default AdminLayout
