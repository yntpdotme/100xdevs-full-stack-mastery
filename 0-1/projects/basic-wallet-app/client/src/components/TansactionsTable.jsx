import {useState} from 'react';
import {useQuery, keepPreviousData} from '@tanstack/react-query';

import {TransactionService} from '../api/services';
import {Pagination, TableLoader} from './index';

const TansactionsTable = () => {
  const [page, setPage] = useState(1);

  const {data, isLoading, isError} = useQuery({
    queryKey: ['transactions', {page}],
    queryFn: async () => {
      const response = await TransactionService.getAllTransactions(page);
      return response.data.data;
    },
    placeholderData: keepPreviousData,
  });

  const headings = ['From', 'To', 'Amount', 'Date', 'Time'];

  if (isLoading) {
    return <TableLoader />;
  }
  if (isError) {
    return (
      <div className="p-20 text-center font-montserrat text-xl font-normal leading-tight text-red-400">
        Transactions couldn&apos;t load
      </div>
    );
  }

  if (!data.transactions || data.transactions?.length === 0) {
    return (
      <div className="p-28 text-center font-montserrat">
        Hmm...No Transactions found.
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
          {data.transactions.map((transaction, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 transition-colors hover:bg-muted/50 dark:border-dark-800"
            >
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {transaction.sender}
              </td>
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {transaction.recipient}
              </td>
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {transaction.amount}
              </td>
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {transaction.date}
              </td>
              <td className="h-[50px] whitespace-nowrap px-4 align-middle">
                {transaction.time}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="w-full font-medium text-gray-400">
          <tr className="transition-colors hover:bg-muted/50">
            <td className="px-2 py-2.5 align-middle" colSpan="5">
              <Pagination
                currentPage={page}
                totalPages={data.pagination.lastPage}
                setPage={setPage}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TansactionsTable;
