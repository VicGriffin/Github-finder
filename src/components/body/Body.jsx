import React, { useState, useEffect } from 'react';
import Search from '../search/Search';
import Profile from '../profile/Profile.jsx';


function Body() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProfile = async (username) => {
    setLoading(true);
    setError('');
    setProfile(null);
    setRepositories([]);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setProfile(data);

      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=30`);
      if (!repoResponse.ok) {
        throw new Error(repoResponse.statusText);
      }
      const repoData = await repoResponse.json();
      setRepositories(repoData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Search onSearch={fetchProfile} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Profile profile={profile} />
      <div className="repository-section">
        <h1>Repositories</h1>
        {repositories.length > 0 ? (
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No repositories available</p>
        )}
      </div>
    </div>
  );
}

export default Body;
