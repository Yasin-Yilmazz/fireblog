import { onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { database } from '../helpers/fireStore';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((values) => {
          setTodos((oldArray) => [...oldArray, values]);
        });
      }
    });
  }, []);

  return (
    <div>
      {todos.map(({ title, content, uuid }) => (
        <>
          <h1>{title} </h1>
          <h2>{content} </h2>
          <h2>{uuid} </h2>
        </>
      ))}
    </div>
  );
};

export default Home;
