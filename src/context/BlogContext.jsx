import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [profileImgUrl, setProfileImgUrl] = useState(
    'https://picsum.photos/id/237/200/160'
  );
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BlogContext.Provider
      value={{
        profileImgUrl,
        setProfileImgUrl,
        dataList,
        setDataList,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
