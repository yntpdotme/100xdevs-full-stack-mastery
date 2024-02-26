import {Link} from 'react-router-dom';
import {BirthdayCard} from '../components';
import gitHubLogo from '../assets/github.svg';

const BirthdayCardPage = () => {
  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/BirthdayCard/BirthdayCard.jsx"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>
      <h1>Birthday Card</h1>

      <BirthdayCard />

      <Link to="/">
        <button className="link-btn">Back To Home</button>
      </Link>
    </>
  );
};

export default BirthdayCardPage;
