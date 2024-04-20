import {useState} from 'react';
import {useQuery, keepPreviousData} from '@tanstack/react-query';

import {TransactionService} from '../api/services';
import {TansactionsTable} from '../components';

const TransactionsPage = () => {
  const [page, setPage] = useState(1);

  const query = useQuery({
    queryKey: ['transactions', {page}],
    queryFn: async () => {
      const response = await TransactionService.getAllTransactions(page);
      return response.data.data;
    },
    placeholderData: keepPreviousData,
  });

  return (
    <section className="px-2 pt-6 lg:p-6">
      <div className="flex w-full flex-col items-center space-x-2 lg:items-start lg:space-x-0">
        <h3 className="font-palanquin text-2xl font-medium tracking-tight dark:text-white">
          Transaction History
        </h3>

        <h5 className="mt-1.5 scroll-m-20 font-montserrat text-lg font-normal text-gray-400">
          Explore your wallet history.
        </h5>
      </div>

      <div className="mt-16 flex flex-col space-y-4 lg:mt-12">
        <div className="rounded-md border border-x-gray-200 p-1 dark:border-dark-800">
          <div className="w-full overflow-auto">
            <TansactionsTable query={query} setPage={setPage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionsPage;
