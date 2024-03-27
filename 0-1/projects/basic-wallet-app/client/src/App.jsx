import {Route, Routes} from 'react-router-dom';

import {
  DashboardPage,
  HomePage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  TransactionsPage,
  TransferPage,
} from './pages';
import {githubLogo} from './assets';

const App = () => {
  return (
    <>
      <main className="h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Routes>

        <a
          href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/projects/basic-wallet-app/README.md"
          className="absolute bottom-10 right-5"
        >
          <img
            src={githubLogo}
            alt="GitHub logo"
            className="md:h-18 h-12 animate-pulse hover:drop-shadow-[0_0_2rem_#FFF] lg:h-14 xl:right-0 xl:h-16"
          />
        </a>
      </main>
    </>
  );
};

export default App;
