import { useState } from 'react';

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
        console.log(jsonResponse);
        setUser(jsonResponse);
        getRepos(jsonResponse.repos_url + '?per_page=100');
      }, (error) => {
        setNotFound(true);
        // alert(error);
      });
  }

  function getRepos(url) {
    fetch(url)
      .then((res) => res.json())
      .then((jsonResponse) => setRepos(jsonResponse));
  }


  // const searchUser = useCallback((event, form) => {

  // }, []);

  return { searchUser, user, repos, notFound };
};