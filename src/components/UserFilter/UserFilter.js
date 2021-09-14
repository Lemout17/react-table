import './UserFilter.css'

const UserFilter = ({ value, onChange }) => {
  return (
    <label className="filter-label">
      Search by name:
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name "
      />
    </label>
  )
}

export default UserFilter
