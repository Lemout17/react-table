import React, { useEffect, useState } from 'react'

const UserFilterState = ({ users, onChange }) => {
  const [val, setVal] = useState('')

  const handleChange = (e) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    if (val) {
      onChange(val)
    }
  }, [onChange, val])

  const arr = users.map((user) => user.adress.state)
  const statesArray = [...new Set(arr)]

  return (
    <>
      {users && (
        <select onChange={handleChange}>
          <option value="">Filter by state</option>
          {statesArray.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default UserFilterState
