import React from 'react';

const Profile = (props) => {
  console.log('profile', props);
  // debugger;
  return (
    <div>
      {props.name.username} has signed in
    </div>
  );
};

export default Profile;