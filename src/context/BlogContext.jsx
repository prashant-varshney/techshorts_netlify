import { createContext, useState, useEffect } from 'react';
const BlogContext = createContext({});

const BlogContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState(
    JSON.parse(sessionStorage.getItem('posts')) || [
      {
        id: 1,
        title: 'What is React?',
        datetime: 'Oct 22, 2021 11:47:39 AM',
        body: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
      },
      {
        id: 2,
        title: 'MacOS Monterey Is Here!',
        datetime: 'Nov 25, 2021 05:30:07 AM',
        body: 'MacOS Monterey new features are as follows:FaceTime Portrait Mode, Maps features including the 3D interactive globe and detailed maps, Spatial Audio with AirPods (third-generation), AirPods Pro, and AirPods Max,On-Device Dictation with offline processing,Siri Text-to-Speech in additional languages',
      },
      {
        id: 3,
        title: 'Fast chargers for electric vehicles!',
        datetime: 'Dec 07, 2021 11:48:01 AM',
        body: 'Heavy industries minister Mahendra Nath Pandey said the Automotive Research Association of India (ARAI) is working on the development of fast chargers for electric vehicles. The automotive research and development body has already developed a prototype of the product and it is expected to be ready by December 2022. He said these fast chargers will boost demand for battery vehicles.',
      },
    ]
  );

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(() => {
    sessionStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <BlogContext.Provider
      value={{
        search,
        setSearch,
        posts,
        setPosts,
        searchResults,
        setSearchResults,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext as default, BlogContextProvider };
