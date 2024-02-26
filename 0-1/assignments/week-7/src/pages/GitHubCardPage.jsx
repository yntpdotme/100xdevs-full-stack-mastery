import {Link} from 'react-router-dom';
import {GitHubCard} from '../components';
import gitHubLogo from '../assets/github.svg';

const GitHubCardPage = () => {
  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/GitHubCard/GitHubCard.jsx"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>
      <h1>GitHub Stats Generator</h1>

      <GitHubCard />

      <Link to="/">
        <button className="link-btn">Back To Home</button>
      </Link>
    </>
  );
};

export default GitHubCardPage;
