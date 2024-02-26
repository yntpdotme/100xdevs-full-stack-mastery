import {Link} from 'react-router-dom';
import {ParaGenerator} from '../components';
import gitHubLogo from '../assets/github.svg';

const ParaGenratorPage = () => {
  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/ParaGenerator/ParaGenerator.jsx"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>
      <h1>Paragraph Generator</h1>

      <ParaGenerator />

      <Link to="/">
        <button className="link-btn">Back To Home</button>
      </Link>
    </>
  );
};

export default ParaGenratorPage;
