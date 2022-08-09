import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [profileImgUrl, setProfileImgUrl] = useState(
    'https://picsum.photos/id/237/200/160'
  );

  return (
    <BlogContext.Provider value={{ profileImgUrl, setProfileImgUrl }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
