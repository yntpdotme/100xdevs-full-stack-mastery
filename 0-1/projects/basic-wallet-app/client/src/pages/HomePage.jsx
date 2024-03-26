import {useNavigate} from 'react-router-dom';

import {reactLogo, githubLogo, rightArrow} from '../assets';
import {Button} from '../components';

const HomePage = () => {
  const navigate = useNavigate();
  const handleSetStarted = () => {
    navigate('/signup');
  };

  return (
    <main className="max-container">
      <section className="relative flex h-screen w-full flex-col items-center justify-center px-1">
        <p className="font-montserrat absolute left-5 top-20 animate-pulse xl:left-0">
          From{' '}
          <a href="https://linktr.ee/kadlagakash" target="_blank">
            <span className="font-semibold">Akash Kadlag&nbsp;</span>
          </a>
          ...
        </p>

        <img
          src={reactLogo}
          alt="React logo"
          className="md:h-18 animate-spin-slow h-16 hover:drop-shadow-[0_0_2rem_#646cff] lg:h-24"
        />

        <h1 className="font-palanquin mt-8 bg-gradient-to-r from-gray-700 to-white bg-clip-text text-[72px] font-extrabold text-transparent max-sm:leading-[82px] md:text-6xl lg:mt-0 lg:text-[110px]">
          PaymentX
        </h1>

        <h2 className="font-montserrat bg-clip-text pt-4 text-center text-[20px] md:text-2xl lg:pt-2 lg:text-3xl lg:leading-8 mb-8 lg:mb-12">
          Transforming Payments into&nbsp;a&nbsp;breeze!
        </h2>

        <Button
          onClick={handleSetStarted}
          lable="Get Started"
          iconURL={rightArrow}
          roundedCorners="full"
        />

        <a href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/projects/basic-wallet-app/README.md">
          <img
            src={githubLogo}
            alt="GitHub logo"
            className="md:h-18 absolute bottom-10 right-5 h-12 animate-pulse hover:drop-shadow-[0_0_2rem_#FFF] lg:h-16 xl:right-0 xl:h-20"
          />
        </a>
      </section>
    </main>
  );
};

export default HomePage;
