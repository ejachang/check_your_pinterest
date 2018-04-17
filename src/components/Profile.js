import React from 'react';

const Profile = (props) => {
  let { user } = this.props;
  return (
    <div>
      { user ?
        user : null }
    </div>
  );
};

export default Profile;