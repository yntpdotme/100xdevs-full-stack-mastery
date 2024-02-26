import {Link} from 'react-router-dom';

import reactLogo from '../assets/react.svg';
import gitHubLogo from '../assets/github.svg';

const HomePage = () => {
  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/README.md"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>

      <h1>React Components</h1>

      <img src={reactLogo} id="reactLogo" alt="React Logo" className="react" />

      <div className="card">
        <Link to="/profile">
          <button className="link-btn btn-large">Profile Component</button>
        </Link>

        <Link to="/background-changer">
          <button className="link-btn btn-large">BG Changer Component</button>
        </Link>

        <Link to="/para-generator">
          <button className="link-btn btn-large">
            Para Generator Component
          </button>
        </Link>

        <Link to="/github-card">
          <button className="link-btn btn-large">GitHub Stats Component</button>
        </Link>

        <Link to="/login">
          <button className="link-btn btn-large">OTP Login Component</button>
        </Link>

        <Link to="/bday-card">
          <button className="link-btn btn-large">
            B&apos;Day Card Component
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
