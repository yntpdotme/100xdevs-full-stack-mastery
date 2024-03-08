import {Link} from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <p className="tagline">Be kind to your mind with our</p>
      <h1 className="headline">Todo App</h1>
      <br />
      <Link to="/signin">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
