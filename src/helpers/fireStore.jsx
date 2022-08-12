/* eslint-disable react-hooks/rules-of-hooks */
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  onValue,
  ref,
  remove,
  set,
  update,
} from 'firebase/database';
import { useContext, useEffect } from 'react';
import { uid } from 'uid';
import { BlogContext } from '../context/BlogContext';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

//? create blog function

export const createBlog = (title, content, url) => {
  const uuid = uid();
  set(ref(database, `/${uuid}`), {
    title,
    content,
    url,
    uuid,
  });
};

//? read blog function

export const readBlog = () => {
  const { setDataList } = useContext(BlogContext);

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      // clear datalist because of repetation
      setDataList([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data)?.map((value) => {
          return setDataList((oldArray) => [...oldArray, value]);
        });
      }
    });
  }, [setDataList]);
};

//? delete specific blog
export const deleteBlog = (id) => {
  remove(ref(database, `/${id}`));
};

//? update specific field
export const updateBlog = (id, title, content, url) => {
  update(ref(database, `/${id}`), {
    title,
    content,
    url,
    id,
  });
};
