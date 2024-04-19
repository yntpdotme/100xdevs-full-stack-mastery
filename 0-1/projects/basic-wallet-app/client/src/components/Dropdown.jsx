import {useSetRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {useQueryClient} from '@tanstack/react-query';

import {dropdownState} from '../recoil/atoms';
import {signOutIcon} from '../assets';
import {NavLink} from './index';
import {navLinks} from '../constants';
import {AuthService, LocalStorage} from '../api/services';

const Dropdown = () => {
  const setShowDropDown = useSetRecoilState(dropdownState);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSignOut = async () => {
    try {
      await AuthService.signOut();

      LocalStorage.clear();
      queryClient.clear();

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed inset-x-0 inset-y-14 bottom-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="absolute top-[72px] mx-3 w-[calc(100vw-1.8rem)] overflow-hidden rounded-md border border-gray-200 bg-popover px-1 pb-1.5 pt-3 font-light shadow-lg dark:border-dark-800 dark:shadow-[0_30px_60px_-16px] dark:shadow-primary/40">
        <div className="flex flex-col space-y-3 overflow-y-auto px-1 font-montserrat">
          {navLinks.map((navLink, index) => (
            <NavLink
              label={navLink.label}
              icon={navLink.icon}
              link={navLink.link}
              key={index}
              onClick={() => {
                setShowDropDown(p => !p);
              }}
            />
          ))}
          <div
            role="separator"
            aria-orientation="horizontal"
            className="-mx-1 my-1 h-px bg-muted"
          ></div>
          <button
            className="relative flex cursor-pointer select-none items-center rounded-sm px-4 py-1 pb-2 text-sm outline-none transition-colors hover:bg-accent focus:text-accent-foreground"
            tabIndex="-1"
            onClick={() => {
              setShowDropDown(p => !p);
              handleSignOut();
            }}
          >
            <span className="flex items-center space-x-3">
              <img src={signOutIcon} className="h-6 dark:invert dark:filter" />
              <span>Sign out</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
