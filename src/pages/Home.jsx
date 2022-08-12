import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { deleteBlog, readBlog } from '../helpers/fireStore';

const Home = () => {
  const { dataList } = useContext(BlogContext);
  readBlog();

  dataList && <h1>Loading</h1>;
  return (
    <div>
      {dataList?.map(({ title, content, url, uuid }) => (
        <>
          <h1>{title} </h1>
          <h2>{content} </h2>
          <h3>{url} </h3>
          <button onClick={() => deleteBlog(uuid)}>delete</button>
        </>
      ))}
    </div>
  );
};

export default Home;
