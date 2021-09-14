import UserListItem from '../UserListItem'
import './UserList.css'

const UserList = ({ users, page, onClick }) => {
  return (
    <table onClick={onClick} className="table-container">
      <thead>
        <tr className="title">
          <th data-type="id" className="label">
            id
          </th>
          <th data-type="name" className="label">
            First name
          </th>
          <th data-type="surname" className="label">
            Last name
          </th>
          <th data-type="email" className="label">
            Email
          </th>
          <th data-type="phone" className="label">
            Phone
          </th>
          <th data-type="state" className="label">
            State
          </th>
        </tr>
      </thead>

      <tbody>
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
