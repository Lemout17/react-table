import './UserInfo.css'
import { loremIpsum } from 'react-lorem-ipsum'

const UserInfo = ({ user }) => {
  return (
    <div className="userInfo-container">
      <h3>Profile info:</h3>
      <p>
        Selected profile: <span>{`${user.firstName} ${user.lastName}`}</span>
      </p>
      <p>Description: {loremIpsum({ avgSentencesPerParagraph: 1 })}</p>
      <p>Adress: {user.adress.streetAddress}</p>
      <p>City: {user.adress.city}</p>
      <p>State: {user.adress.state}</p>
    </div>
  )
}

export default UserInfo
