import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return <div>currentUser</div>;
};

export default Profile;
