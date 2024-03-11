import {useEffect, useRef, useState} from 'react';
import axios from 'axios';

import './GitHubCard.css';

const GitHubCard = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleUserNameChange = e => {
    setUserName(e.target.value);
    setError(null); // Clear any previous errors on user input change
  };

  const generateCard = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors before making a new request

    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName.trim()}`,
      );
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching GitHub user data:', error);
      setError('Failed to fetch user data. Please try again.'); // Set user-friendly error message
    } finally {
      // Simulate loader delay for 0.5 second
      setTimeout(() => setLoading(false), 500);
    }
  };
  return (
    <div className="github-card">
      <div className="github-card__input">
        <input
          type="text"
          onChange={handleUserNameChange}
          ref={inputRef}
          placeholder="Enter GitHub username"
        />
        <button onClick={generateCard} disabled={!userName}>
          Generate
        </button>
      </div>

      {loading && <div className="loader"></div>}

      {error && <div className="error-message">{error}</div>}

      {!loading && userData && (
        <div className="github-card__details">
          <div className="github-card__left">
            {userData.avatar_url && (
              <img
                className="github-card__avatar"
                src={userData.avatar_url}
                alt={`Avatar of ${userName}`}
              />
            )}
            <div className="github-card__info">
              {userData.login && (
                <>
                  <h2 className="github-card__username">@{userData.login}</h2>
                  {userData.name && (
                    <h3 className="github-card__name">{userData.name}</h3>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="github-card__right">
            {userData.bio && <p>{userData.bio}</p>}
            {userData.location && (
              <p>
                <strong>Location:</strong> {userData.location}
              </p>
            )}
            {userData.company && (
              <p>
                <strong>Company:</strong> {userData.company}
              </p>
            )}
            {userData.email && (
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
            )}
            {userData.public_repos && (
              <p>
                <strong>Public Repos:</strong> {userData.public_repos}
              </p>
            )}

            <p>
              <strong>Followers:</strong> {userData.followers}
              <strong>&nbsp;&nbsp;Following:</strong> {userData.following}
            </p>

            {userData.html_url && (
              <button className="github-card__button">
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="github-card__link"
                >
                  View on GitHub
                </a>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
