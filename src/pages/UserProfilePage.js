import { Table } from "react-bootstrap";

const UserProfilePage = () => {
  const sessionUser = sessionStorage.getItem('loggedInUser')
  const user = JSON.parse(sessionUser)
  return (
    <>
      <h1>User {user.id}</h1>
      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
};

export default UserProfilePage;
