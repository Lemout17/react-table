import React, { useEffect, useState } from 'react'

const UserFilterState = ({ users, userState, onChange }) => {
  const [val, setVal] = useState(userState)

  const handleChange = (e) => {
    setVal(e.target.value)
  }

  useEffect(() => {
    if (val) {
      onChange(val)
      setVal('')
    }
  }, [onChange, val])

  const arr = users.map((user) => user.adress.state)
  const statesArray = ['Filter by state', ...new Set(arr)]

  return (
    <>
      {users && (
        <select onChange={handleChange}>
          {/* <option selected>Filter by state</option> */}
          {statesArray.map((item) => (
            <option
              key={item}
              value={item}
              selected={
                userState === item ||
                (userState === '' && item === 'Filter by state')
                  ? true
                  : false
              }
            >
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export default UserFilterState
