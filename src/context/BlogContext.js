import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    {title: 'First blog'},
    {title: '2nd coming'}
  ];

  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  )
};

export default BlogContext;