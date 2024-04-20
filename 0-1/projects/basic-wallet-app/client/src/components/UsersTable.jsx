import {useState} from 'react';
import {payIcon} from '../assets';
import {DialogBox, Pagination, TableLoader} from './index';
import {useCurrentUser} from '../hooks';

const UsersTable = ({query, setPage, onSend}) => {
  const [showDialog, setShowDialog] = useState(new Array(5).fill(false));
  const currentUser = useCurrentUser();

  const headings = ['Name', 'Email', 'Send'];

  const handleDialogVisibility = index => {
    setShowDialog(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (query.isLoading || currentUser.isLoading) {
    return <TableLoader />;
  }

  if (query.isError || currentUser.isError) {
    return (
      <div className="p-20 text-center font-montserrat text-xl font-normal leading-tight text-red-400">
        Users couldn&apos;t load
      </div>
    );
  }

  if (!query.data.users || query.data.users?.length === 0) {
    return (
      <div className="p-28 text-center font-montserrat">
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
                className="h-[54px] text-base w-[150px] px-4 text-left align-middle font-medium text-muted-foreground"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {query.data.users.map((user, index) => {
            if (user._id === currentUser.data._id) {
              return null;
            }

            return (
              <tr
                key={index}
                className="border-b border-gray-50 transition-colors hover:bg-muted/50 dark:border-dark-800"
                onClick={() => handleDialogVisibility(index)}
              >
                <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                  {user.name}
                </td>
                <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                  {user.email}
                </td>
                <td className="h-[53px] whitespace-nowrap px-4 align-middle">
                  <span>
                    <button
                      type="button"
                      className="dark:border-dark-700 dark:active:bg-dark-600 flex size-9 items-center justify-center rounded-full border-gray-100 bg-transparent p-1.5 outline-none ring-primary/70 transition-all hover:border focus:ring-2 active:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-primary/70"
                    >
                      <img
                        src={payIcon}
                        alt=""
                        className="hover:animate-pulse"
                      />
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
            );
          })}
        </tbody>
        <tfoot className="w-full font-medium text-gray-400">
          <tr className="transition-colors hover:bg-muted/50">
            <td className="px-2 py-2.5 align-middle" colSpan="5">
              <Pagination
                currentPage={query.data.pagination.currentPage}
                totalPages={query.data.pagination.lastPage}
                setPage={setPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default UsersTable;
