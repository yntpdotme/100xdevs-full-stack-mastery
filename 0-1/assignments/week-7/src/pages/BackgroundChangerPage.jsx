import {Link} from 'react-router-dom';
import {BackgroundChanger} from '../components';
import gitHubLogo from '../assets/github.svg';

const BackgroundChangerPage = () => {
  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/BackgroundChanger/BackgroundChanger.jsx"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>
      <h1>Background Changer</h1>

      <BackgroundChanger />

      <Link to="/">
        <button className="link-btn">Back To Home</button>
      </Link>
    </>
  );
};

export default BackgroundChangerPage;
