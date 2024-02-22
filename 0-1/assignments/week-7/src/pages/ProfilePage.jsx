import { Link } from "react-router-dom";
import { Profile } from "../components";
import gitHubLogo from "../assets/github.svg";

const ProfilePage = () => {
	return (
		<>
			<a
				href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/Profile.jsx"
				target="_blank"
			>
				<img src={gitHubLogo} className="logo" alt="Github logo" />
			</a>
			<h1>User Profile</h1>

			<Profile />

			<Link to="/">
				<button className="link-btn">Back To Home</button>
			</Link>
		</>
	);
};

export default ProfilePage;
