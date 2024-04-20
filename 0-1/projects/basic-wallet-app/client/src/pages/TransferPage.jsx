import {useState} from 'react';
import {useQuery, keepPreviousData} from '@tanstack/react-query';

import {InputSearch, UsersTable} from '../components';
import {UserService} from '../api/services';
import {useDebounce} from '../hooks';

const TransferPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  const query = useQuery({
    queryKey: ['users', {search: debouncedSearch}, {page}],
    queryFn: async () => {
      const response = await UserService.getAllUsers(debouncedSearch, page);
      return response.data.data;
    },
    placeholderData: keepPreviousData,
  });

  const handleSearchChange = e => {
    setSearch(e.target.value); 
  };

  return (
    <section className="px-2 pt-6 lg:p-6">
      <div className="flex w-full flex-col items-center space-x-2 lg:items-start lg:space-x-0">
        <h3 className="font-palanquin text-2xl font-medium tracking-tight dark:text-white">
          Transfer Fund
        </h3>

        <h5 className="mt-1.5 scroll-m-20 font-montserrat text-lg font-normal text-gray-400">
          Send money to other user.
        </h5>
      </div>

      <div className="mt-8 flex flex-col space-y-4">
        <div className="w-full max-w-sm">
          <InputSearch
            type="search"
            placeholder="Search for user..."
            props={{onChange: handleSearchChange}}
          />
        </div>

        <div className="rounded-md border border-x-gray-200 p-1 dark:border-dark-800">
          <div className="w-full overflow-auto">
            <UsersTable query={query} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferPage;
