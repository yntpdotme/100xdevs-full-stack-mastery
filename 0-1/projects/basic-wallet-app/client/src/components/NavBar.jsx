import {Link} from 'react-router-dom';
import {useState} from 'react';

import {hamburgerMenu} from '../assets';
import {Dropdown} from '.';

const NavBar = () => {
  const [showDropDrown, setShowDropDown] = useState(false);

  return (
    <nav className="lg:hidden">
      <div
        className={`flex items-start justify-between p-4 pt-6 ${ `border-b border-primary/20`} `}
      >
        <div className="bg-gradient-to-r from-gray-600 to-white bg-clip-text font-palanquin text-2xl font-extrabold text-transparent">
          <Link to="/">PaymentX</Link>
        </div>

        <button onClick={() => setShowDropDown(!showDropDrown)}>
          <img src={hamburgerMenu} alt="hamburger menu" className="h-8" />
        </button>
      </div>

      {showDropDrown && <Dropdown />}
    </nav>
  );
};

export default NavBar;
