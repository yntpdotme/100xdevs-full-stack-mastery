import {Link} from 'react-router-dom';

import {dashboardIcon, settingsIcon, signOutIcon} from '../assets';

const PopUp = () => {
  return (
    <div className="min-w-[14.5rem] overflow-hidden rounded-md border border-dark-800 bg-popover p-1 font-light shadow-[0_30px_100px_-5px] shadow-primary/40">
      <div
        className="focus:text-accent-foreground relative flex cursor-default select-none items-center rounded-none p-3 text-sm outline-none transition-colors hover:bg-accent"
        tabIndex="-1"
      >
        <div className="flex flex-col justify-start truncate text-left text-[15px]">
          <div className="text-gray-500">Signed in as</div>
          <div>
            <span className="block truncate">user@email.com</span>
          </div>
        </div>
      </div>

      <div role="separator" className="-mx-1 my-1 h-px bg-muted"></div>

      <Link
        className="focus:text-accent-foreground relative flex cursor-default select-none items-center space-x-2 rounded-sm p-3 text-[15px] outline-none transition-colors hover:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        tabIndex="-1"
        to="/dashboard"
      >
        <img src={dashboardIcon} className="h-5" />
        <span>Dashboard</span>
      </Link>

      <Link
        className="focus:text-accent-foreground relative flex cursor-default select-none items-center space-x-2 rounded-sm p-3 py-2.5 text-[15px] outline-none transition-colors hover:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        tabIndex="-1"
        to="/profile"
      >
        <img src={settingsIcon} className="h-5" />
        <span>Settings</span>
      </Link>

      <div
        role="separator"
        aria-orientation="horizontal"
        className="-mx-1 my-1 hidden h-px bg-muted lg:flex"
      ></div>

      <button
        className="focus:text-accent-foreground relative flex w-full cursor-pointer select-none items-center rounded-sm p-3 text-[15px] outline-none transition-colors hover:bg-accent"
        tabIndex="-1"
      >
        <span className="flex items-center space-x-2">
          <img src={signOutIcon} className="h-5" />
          <span>Sign out</span>
        </span>
      </button>
    </div>
  );
};

export default PopUp;