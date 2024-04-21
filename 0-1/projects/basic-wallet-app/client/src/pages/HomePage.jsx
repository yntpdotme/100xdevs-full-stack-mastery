import {useNavigate} from 'react-router-dom';

import {reactLogo, rightArrow} from '../assets';
import {ButtonHero} from '../components';

const HomePage = () => {
  const navigate = useNavigate();
  const handleSetStarted = () => {
    navigate('/signin');
  };

  return (
    <section className="max-container relative flex h-screen flex-col items-center justify-center px-1">
      <p className="absolute left-5 top-10 animate-pulse font-montserrat xl:left-0">
        From{' '}
        <a href="https://linktr.ee/kadlagakash" target="_blank">
          <span className="font-medium">Akash Kadlag</span>
        </a>
        ...
      </p>

      <img
        src={reactLogo}
        alt="React logo"
        className="h-14 animate-spin-slow hover:drop-shadow-[0_0_2rem_#646cff] md:h-16 lg:h-20"
      />

      <h1 className="md:text-5xl mt-4 bg-gradient-to-r from-gray-400 to-gray-950 bg-clip-text font-palanquin text-[72px] font-extrabold text-transparent dark:from-gray-700 dark:to-white max-sm:leading-[82px] lg:mt-2 lg:text-[80px] xl:text-8xl">
        PaymentX
      </h1>

      <h2 className="mb-10 mt-2 bg-clip-text pt-2 text-center font-montserrat text-lg text-foreground md:mt-1 md:text-[22px] lg:mb-14 lg:pt-3 lg:text-2xl lg:leading-8 xl:text-[26px]">
        Transforming Payments into&nbsp;a&nbsp;breeze!
      </h2>

      <ButtonHero
        onClick={handleSetStarted}
        label="Get Started"
        iconURL={rightArrow}
        roundedCorners="full"
      />
    </section>
  );
};

export default HomePage;
