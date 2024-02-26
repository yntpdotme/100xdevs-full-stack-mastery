import {Link} from 'react-router-dom';
import {OTPLogin} from '../components';
import gitHubLogo from '../assets/github.svg';

const OTPLoginPage = () => {
  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/OTPLogin/OTPLogin.jsx"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>
      <h1>OTP Login</h1>

      <OTPLogin />

      <Link to="/">
        <button className="link-btn">Back To Home</button>
      </Link>
    </>
  );
};

export default OTPLoginPage;
