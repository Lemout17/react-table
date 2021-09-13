const UserFilter = ({ value, onChange }) => {
  return (
    <label>
      Search by name:
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default UserFilter
