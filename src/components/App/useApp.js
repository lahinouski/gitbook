import { useState } from 'react';

export default function useApp() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forseIndexPage, setForseIndexPage] = useState(false);

  function searchUser(event, searchTerm) {
    event.preventDefault();
    setRepos([]);
    setLoading(true);
    setNotFound(false);
    setForseIndexPage(true);
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('User not found');
      }, (networkError) => console.log(networkError.message))
      .then((jsonResponse) => {
        getRepos(jsonResponse, 1);
        setUser(jsonResponse);
        setLoading(false);
      }, (error) => {
        console.log(error);
        setNotFound(true);
        setLoading(false);
      });
  }

  function getRepos(user, pageIndex) {
    setLoading(true);
    fetch(`${user.repos_url}?per_page=4&page=${pageIndex}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setRepos(jsonResponse)
        setForseIndexPage(false);
        setLoading(false);
      });
  }

  return { searchUser, getRepos, user, repos, notFound, loading, forseIndexPage };
};