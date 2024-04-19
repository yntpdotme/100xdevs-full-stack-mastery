import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';

import {themeState} from '../recoil/atoms';
import {moonIcon, sunIcon} from '../assets';

const ThemeToggler = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [iconRotation, setIconRotation] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIconRotation(prevRotation => prevRotation + 360);
  };

  return (
    <div className="mr-2 flex items-start justify-end max-lg:mr-5 max-lg:flex-1">
      <img
        src={theme === 'dark' ? sunIcon : moonIcon}
        alt="ThemeToggler"
        width={27}
        height={27}
        onClick={handleThemeSwitch}
        style={{
          transform: `rotate(${iconRotation}deg)`,
          transition: 'transform 0.5s ease-in-out',
        }}
        className="align-top transition-transform duration-500 lg:text-black"
      />
    </div>
  );
};

export default ThemeToggler;
