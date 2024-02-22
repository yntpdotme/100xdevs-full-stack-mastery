import { Link } from "react-router-dom";
import { BdayCard } from "../components";
import gitHubLogo from "../assets/github.svg";

const BdayCardPage = () => {
	return (
		<>
			<a
				href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/assignments/week-7/src/components/BdayCard.jsx"
				target="_blank"
			>
				<img src={gitHubLogo} className="logo" alt="Github logo" />
			</a>
			<h1>Birthday Card</h1>

			<BdayCard />

			<Link to="/">
				<button className="link-btn">Back To Home</button>
			</Link>
		</>
	);
};

export default BdayCardPage;
