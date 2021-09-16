import UserListItem from '../UserListItem'
import './UserList.css'

import { ReactComponent as AscendSort } from '../../svg/sort-asc.svg'
import { ReactComponent as DescendSort } from '../../svg/sort-desc.svg'

const UserList = ({ users, sort, field, onClickSort, onClickRow }) => {
  const onSort = (type) =>
    field === type && sort ? <AscendSort /> : <DescendSort />

  return (
    <table onClick={onClickSort} className="table-container">
      <thead>
        <tr className="table-header-row">
          <th data-type="index" className="table-header">
            id
            {onSort('index')}
          </th>
          <th data-type="firstName" className="table-header">
            First name
            {onSort('firstName')}
          </th>
          <th data-type="lastName" className="table-header">
            Last name
            {onSort('lastName')}
          </th>
          <th data-type="email" className="table-header">
            Email
            {onSort('email')}
          </th>
          <th data-type="phone" className="table-header">
            Phone
            {onSort('phone')}
          </th>
          <th data-type="adress" className="table-header">
            State
            {onSort('adress')}
          </th>
        </tr>
      </thead>

      <tbody onClick={onClickRow}>
        {users.map(
          ({ firstName, lastName, email, phone, index, adress: { state } }) => (
            <UserListItem
              key={email}
              id={index + 1}
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
