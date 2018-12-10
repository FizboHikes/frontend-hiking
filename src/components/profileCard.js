import React, { Component } from 'react';

const ProfileCard = (props) => {
  let profile = props.profileInfo
  return (
    <div>
      <h3>{profile.username}</h3>
      <p>About me: {profile.about}</p>
      <p>My Interests: {profile.interests}</p>
    </div>
  )
}

export default ProfileCard
