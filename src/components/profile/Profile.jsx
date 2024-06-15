
import React from 'react';
import "./profile.css";

function Profile({ profile }) {
  if (!profile) {
    return <p>No profile data to display</p>;
  }

  return (
    <div className="profile-info">
      <h2>{profile.name}</h2>
      <img src={profile.avatar_url} alt="Profile Avatar" width={100} />
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Public Repos:</strong> {profile.public_repos}</p>
      <p><strong>Followers:</strong> {profile.followers}</p>
      <p><strong>Following:</strong> {profile.following}</p>
      <p><strong>Profile URL:</strong> <a href={profile.html_url} target="_blank" rel="noopener noreferrer">{profile.html_url}</a></p>
    </div>
  );
}

export default Profile;
