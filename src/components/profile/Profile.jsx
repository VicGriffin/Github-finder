import React from 'react';
import "./profile.css";
import { CiLocationOn } from "react-icons/ci";
import { RiGitRepositoryFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Profile({ profile }) {
  if (!profile) {
    return <p>No profile data to display</p>;
  }

  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <img src={profile.avatar_url} alt="Profile Avatar" width={100} />
      <button><a href={profile.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong><CiLocationOn />Location:</strong> {profile.location}</p>
      <p><strong><RiGitRepositoryFill />Public Repos:</strong> {profile.public_repos}</p>
      <p><strong><IoIosPeople />Followers:</strong> {profile.followers}</p>
      <p><strong><IoIosPeople />Following:</strong> {profile.following}</p>
      <p><strong><CiSearch />Profile URL:</strong> <a href={profile.html_url} target="_blank" rel="noopener noreferrer">{profile.html_url}</a></p>
    </div>
  );
}

export default Profile;
