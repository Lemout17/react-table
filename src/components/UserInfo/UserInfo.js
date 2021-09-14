import './UserInfo.css'
import { loremIpsum } from 'react-lorem-ipsum'

const UserInfo = ({ user }) => {
  return (
    <div className="userInfo-container">
      <h3>Profile info:</h3>
      <p className="userInfo-desc">
        Selected profile:{' '}
        <span className="userInfo-text">{`${user.firstName} ${user.lastName}`}</span>
      </p>
      <p className="userInfo-desc">
        Description:{' '}
        <span className="userInfo-text">
          {loremIpsum({ avgSentencesPerParagraph: 1 })}
        </span>
      </p>
      <p className="userInfo-desc">
        Adress:{' '}
        <span className="userInfo-text">{user.adress.streetAddress}</span>
      </p>
      <p className="userInfo-desc">
        City: <span className="userInfo-text">{user.adress.city}</span>
      </p>
      <p className="userInfo-desc">
        State: <span className="userInfo-text">{user.adress.state}</span>
      </p>
    </div>
  )
}

export default UserInfo
