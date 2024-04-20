import {Link, useNavigate} from 'react-router-dom';
import {useQueryClient} from '@tanstack/react-query';

import {dashboardIcon, settingsIcon, signOutIcon, themeIcon} from '../assets';
import ThemeToggler from './ThemeToggler';
import {useCurrentUser} from '../hooks';
import {AuthService, LocalStorage} from '../api/services';

const PopUp = ({hidePopUp}) => {
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

  const {data:currentUser, isError} = useCurrentUser();

  return (
    <div className="relative min-w-[14.5rem] rounded-md border border-gray-200 bg-popover p-1 font-light text-popover-foreground shadow-lg dark:border-dark-800 dark:shadow-2xl dark:shadow-primary/40">
      <div
        className="relative flex cursor-default select-none items-center rounded-none px-3 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus:text-accent-foreground"
        tabIndex="-1"
        onClick={hidePopUp}
      >
        <div className="flex flex-col justify-start truncate text-left text-sm">
          <div className="text-xs text-gray-500">Signed in as</div>
          <div>
            <span className="block truncate">
              {isError ? (
                <span className="text-red-400">Email couldn&apos;t load</span>
              ) : (
                currentUser?.email
              )}
            </span>
          </div>
        </div>
      </div>

      <div role="separator" className="-mx-1 my-1 h-px bg-muted"></div>

      <Link
        className="relative flex cursor-default select-none items-center space-x-2.5 rounded-sm px-3 py-1.5 font-montserrat text-sm font-normal outline-none transition-colors hover:bg-accent focus:text-accent-foreground"
        tabIndex="-1"
        to="/dashboard"
        onClick={hidePopUp}
      >
        <img src={dashboardIcon} className="h-5 dark:invert dark:filter" />
        <span>Dashboard</span>
      </Link>

      <Link
        className="relative flex cursor-default select-none items-center space-x-2.5 rounded-sm px-3 py-1.5 font-montserrat text-sm font-normal outline-none transition-colors hover:bg-accent focus:text-accent-foreground"
        tabIndex="-1"
        to="/profile"
        onClick={hidePopUp}
      >
        <img src={settingsIcon} className="h-5 dark:invert dark:filter" />
        <span>Settings</span>
      </Link>

      <div
        role="separator"
        aria-orientation="horizontal"
        className="-mx-1 my-1 hidden h-px bg-muted lg:flex"
      ></div>

      <div
        className="relative flex cursor-default select-none items-center justify-between space-x-2 rounded-sm px-3 py-1.5 font-montserrat text-sm font-normal outline-none transition-colors hover:bg-accent focus:text-accent-foreground"
        tabIndex="-1"
        onClick={() => setTimeout(hidePopUp, 500)}
      >
        <div className="flex space-x-2.5">
          <img src={themeIcon} className="h-5 dark:invert dark:filter" />
          <span>Theme</span>
        </div>
        <ThemeToggler />
      </div>

      <div
        role="separator"
        aria-orientation="horizontal"
        className="-mx-1 my-1 hidden h-px bg-muted lg:flex"
      ></div>

      <button
        className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-3 py-2 font-montserrat text-sm font-normal outline-none transition-colors hover:bg-accent focus:text-accent-foreground"
        tabIndex="-1"
        onClick={() => {
          hidePopUp();
          handleSignOut();
        }}
      >
        <span className="flex items-center space-x-2.5">
          <img src={signOutIcon} className="h-5 dark:invert dark:filter" />
          <span>Sign out</span>
        </span>
      </button>
    </div>
  );
};

export default PopUp;
