import {Link} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {dropdownState} from '../recoil/atoms';
import {hamburgerMenu} from '../assets';
import {Dropdown} from '.';
import ThemeToggler from './ThemeToggler';

const NavBar = () => {
  const [showDropDrown, setShowDropDown] = useRecoilState(dropdownState);

  return (
    <>
      <nav className="lg:hidden relative z-10">
        <div className="flex items-start justify-between border-b border-gray-100 p-4 pt-6 dark:border-primary/20">
          <div className="bg-gradient-to-r from-gray-400 to-gray-950 bg-clip-text font-palanquin text-2xl font-extrabold text-transparent dark:from-gray-600 dark:to-white">
            <Link to="/">PaymentX</Link>
          </div>
          <div className="flex items-center">
            <ThemeToggler />
            <button onClick={() => setShowDropDown(!showDropDrown)}>
              <img
                src={hamburgerMenu}
                alt="hamburger menu"
                className="h-8 dark:invert dark:filter"
              />
            </button>
          </div>
        </div>
        {showDropDrown && <Dropdown />}
      </nav>
    </>
  );
};

export default NavBar;
