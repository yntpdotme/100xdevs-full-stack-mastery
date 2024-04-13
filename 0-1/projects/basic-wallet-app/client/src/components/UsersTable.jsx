import {useState} from 'react';

import {payIcon} from '../assets';
import {DialogBox} from './index';

const UsersTable = ({users, onSend}) => {
  const [showDialog, setShowDialog] = useState(
    Array.from({length: users?.length || 0}, () => false),
  );

  const headings = ['Name', 'Email', 'Send'];

  const handleDialogVisibility = index => {
    setShowDialog(prev => [
      ...prev.slice(0, index),
      !prev[index],
      ...prev.slice(index + 1),
    ]);
  };

  if (!users || users?.length === 0) {
    return (
      <div className="m-4 text-center font-montserrat">
        Hmm...No Users found.
      </div>
    );
  }

  return (
    <>
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b border-gray-50 text-gray-400 transition-colors hover:bg-muted/50 dark:border-dark-800">
            {headings.map((heading, index) => (
              <th
                key={index}
                className="h-12 w-[150px] px-4 text-left align-middle font-medium text-muted-foreground"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 transition-colors hover:bg-muted/50 dark:border-dark-800"
              onClick={() => handleDialogVisibility(index)}
            >
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {user.name}
              </td>
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {user.email}
              </td>
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                <span>
                  <button
                    type="button"
                    className="dark:border-dark-700 dark:active:bg-dark-600 flex size-9 items-center justify-center rounded-full border-gray-100 bg-transparent p-1.5 outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
                  >
                    <img src={payIcon} alt="" className="hover:animate-pulse" />
                  </button>
                </span>
              </td>
              {showDialog[index] && (
                <DialogBox
                  label="Transfer Amount"
                  user={user}
                  onSubmit={onSend}
                  onClose={() => handleDialogVisibility(index)}
                />
              )}
            </tr>
          ))}
        </tbody>
        <tfoot className="w-full font-medium text-gray-400">
          <tr className="transition-colors hover:bg-muted/50">
            <td className="px-2 py-2.5 align-middle" colSpan="5">
              <div className="flex w-full items-center gap-2">
                <button
                  className="dark:border-dark-700 dark:active:bg-dark-600 flex size-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
                  disabled=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    ></path>
                  </svg>
                </button>

                <button
                  className="dark:border-dark-700 dark:active:bg-dark-600 rounded-fullborder-gray-100 flex size-8 items-center justify-center bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
                  disabled=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    ></path>
                  </svg>
                </button>

                <button
                  className="dark:border-dark-700 dark:active:bg-dark-600 flex size-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
                  disabled=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </button>

                <button
                  className="dark:border-dark-700 dark:active:bg-dark-600 flex size-8 items-center justify-center rounded-full border-gray-100 bg-transparent outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
                  disabled=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </button>

                <span className="flex items-center gap-1 text-sm text-foreground">
                  <div>Page</div>
                  <div>1 of 1</div>
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default UsersTable;
