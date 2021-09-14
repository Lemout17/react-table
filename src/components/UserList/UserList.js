import UserListItem from '../UserListItem'
import './UserList.css'

import { ReactComponent as AscendSort } from '../../svg/sort-asc.svg'
import { ReactComponent as DescendSort } from '../../svg/sort-desc.svg'

const UserList = ({ users, page, sort, field, onClickSort, onClickRow }) => {
  console.log('sort', sort)
  return (
    <table onClick={onClickSort} className="table-container">
      <col width="50px" />

      <thead>
        <tr className="table-header-row">
          <th data-type="id" className="table-header">
            id
          </th>
          <th data-type="firstName" className="table-header">
            First name
            {field === 'firstName' && sort ? <AscendSort /> : <DescendSort />}
          </th>
          <th data-type="lastName" className="table-header">
            Last name
            {field === 'lastName' && sort ? <AscendSort /> : <DescendSort />}
          </th>
          <th data-type="email" className="table-header">
            Email {field === 'email' && sort ? <AscendSort /> : <DescendSort />}
          </th>
          <th data-type="phone" className="table-header">
            Phone {field === 'phone' && sort ? <AscendSort /> : <DescendSort />}
          </th>
          <th data-type="adress" className="table-header">
            State
            {field === 'adress' && sort ? <AscendSort /> : <DescendSort />}
          </th>
        </tr>
      </thead>

      <tbody onClick={onClickRow}>
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
