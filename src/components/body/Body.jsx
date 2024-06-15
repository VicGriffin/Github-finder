
import React, { useState } from 'react';
import Search from '../search/Search';
import Profile from '../profile/Profile';


function Body() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProfile = async (username) => {
    setLoading(true);
    setError('');
    setProfile(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Search onSearch={fetchProfile} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Profile profile={profile} />
    </div>
  );
}

export default Body;
