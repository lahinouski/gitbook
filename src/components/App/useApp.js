import { useState, useEffect } from 'react';

export default function useApp() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [notFound, setNotFound] = useState(false);

  function searchUser(event, searchTerm) {
    event.preventDefault();
    setNotFound(false);
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('User not found');
      }, (networkError) => console.log(networkError.message))
      .then((jsonResponse) => {
        const reposCount = jsonResponse.public_repos; // 262
        const pagesCount = Math.ceil(reposCount / 100); // 3
        let currentPageIndex = 0; // Decrease pagesCount instead.
        // gaearon
        while (currentPageIndex < pagesCount) {
          getRepos(`${jsonResponse.repos_url}?per_page=100&page=${currentPageIndex}`);
          currentPageIndex++;
        }

        setUser(jsonResponse);
      }, (error) => {
        setNotFound(true);
        console.log(error);
      });
  }

  function getRepos(url) {
    fetch(url)
      .then((res) => res.json())
      .then((jsonResponse) => setRepos(repos.concat(jsonResponse)));
  }


  // const searchUser = useCallback((event, form) => {

  // }, []);

  return { searchUser, user, repos, notFound };
};