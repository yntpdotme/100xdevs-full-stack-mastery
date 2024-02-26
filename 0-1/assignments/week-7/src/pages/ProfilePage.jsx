import {Link} from 'react-router-dom';
import {Profile} from '../components';
import gitHubLogo from '../assets/github.svg';
import avatar from '../assets/avatar.jpg';
import cover from '../assets/cover.png';

const ProfilePage = () => {
  const user = {
    avatar: avatar,
    cover: cover,
    name: 'Akash Kadlag',
    age: 23,
    city: 'Pune',
    followers: '2K',
    likes: '4k',
    posts: '500',
  };

  return (
    <>
      <a
        href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/Profile/Profile.jsx"
        target="_blank"
      >
        <img src={gitHubLogo} className="logo" alt="Github logo" />
      </a>
      <h1>User Profile</h1>

      <Profile {...user} />

      <Link to="/">
        <button className="link-btn">Back To Home</button>
      </Link>
    </>
  );
};

export default ProfilePage;
