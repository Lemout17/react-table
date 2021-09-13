import UserListItem from '../UserListItem'
import './UserList.css'

const UserList = ({ users, page, onClick }) => {
  return (
    <table className="table-container">
      <thead>
        <tr className="title">
          <th className="label">id</th>
          <th className="label">First name</th>
          <th className="label">Last name</th>
          <th className="label">Email</th>
          <th className="label">Phone</th>
          <th className="label">State</th>
        </tr>
      </thead>

      <tbody onClick={onClick}>
        {users.map(
          ({ firstName, lastName, email, phone, adress: { state } }, index) => (
            <UserListItem
              key={email}
              id={index + 1 + (page - 1) * 20}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              state={state}
            />
          )
        )}
      </tbody>
    </table>
  )
}

export default UserList
