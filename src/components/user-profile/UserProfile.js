import React from 'react';
import './style.css';
import '../../global.css';
/**
 * @render react
 * @name UserProfile
 * @description Displays the user profile
 * @example
 * <UserProfile
 *    username={"Ela loveface"}
 * />
 */
const UserProfile = ({ username = 'Jack Oliver' }) => (
  <div className="UserProfile">
    <div className="User">
      <div id="x" className="name">{username}</div>
      <div className="image">
        <img src="http://bit.ly/2FLfouP" alt="profile" />
      </div>
    </div>
  </div>
);

export default UserProfile;
