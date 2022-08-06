import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email);
  return <div>Home</div>;
};

export default Home;
