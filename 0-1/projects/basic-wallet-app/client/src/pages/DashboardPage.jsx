import {useQuery} from '@tanstack/react-query';

import {WalletService} from '../api/services';
import {GainIndicator, DepositForm} from '../components';

const DashboardPage = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['balance'],
    queryFn: async () => {
      const response = await WalletService.getBalance();
      return response.data.data;
    },
  });

  const handleDeposit = () => {};

  return (
    <section className="px-2 pt-6 lg:p-6">
      <div className="flex w-full flex-col items-center space-x-2 lg:items-start lg:space-x-0">
        <h3 className="font-palanquin text-2xl font-medium tracking-tight dark:text-white">
          Dashboard
        </h3>

        <h5 className="mt-1.5 scroll-m-20 font-montserrat text-lg font-normal text-gray-400">
          An overview of your wallet.
        </h5>
      </div>

      <div className="mt-8 flex flex-col space-y-3 rounded-lg border border-gray-100 bg-background p-5 dark:border-dark-900">
        <h6 className="scroll-m-20 font-montserrat text-base font-medium">
          <span className="font-normal text-gray-400">Wallet Balance</span>
        </h6>
        {isLoading ? (
          <div>
            <div className="inline-block size-9 animate-spin rounded-full border-[5px] border-gray-200 border-t-primary dark:border-gray-600 dark:border-t-primary"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : isError ? (
          <div className="mt-8 text-2xl font-normal leading-tight text-red-400">
            Your request cannot be processed at this time.
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <div className="flex justify-between">
              <div className="text-3xl font-bold">₹ {data?.balance}</div>
              <GainIndicator gain={data?.gain} />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex w-full flex-col rounded-md border border-gray-100 p-5 dark:border-dark-900 xl:max-w-2xl">
        <h4 className="scroll-m-20 font-palanquin text-[22px] font-semibold">
          Deposit
        </h4>
        <p className="font-montserrat text-gray-500 dark:text-gray-400">
          Add money to your Wallet
        </p>

        <DepositForm onSubmit={handleDeposit} />
      </div>
    </section>
  );
};

export default DashboardPage;
