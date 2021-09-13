import PropTypes from 'prop-types'
import './UserListItem.css'

const UserListItem = ({ id, firstName, lastName, email, phone, state }) => (
  <tr className="item">
    <td data-source={email}>{id}</td>
    <td data-source={email}>{firstName}</td>
    <td data-source={email}>{lastName}</td>
    <td data-source={email}>{email}</td>
    <td data-source={email}>{phone}</td>
    <td data-source={email}>{state}</td>
  </tr>
)

UserListItem.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
}

export default UserListItem
