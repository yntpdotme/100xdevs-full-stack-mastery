import {Route, Routes, useLocation} from 'react-router-dom';

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
import {NavBar, SideBar} from './components';

const App = () => {
  const location = useLocation();

  const renderNavigation = !['/', '/signin', '/signup'].includes(
    location.pathname,
  );

  return (
    <>
      {renderNavigation && <NavBar />}

      {renderNavigation && (
        <aside>
          <SideBar />
        </aside>
      )}

      <main className="h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <a
          href="https://github.com/KadlagAkash/100xdevs-full-stack-mastery/blob/main/0-1/projects/basic-wallet-app/README.md"
          className="absolute bottom-5 right-5"
        >
          <img
            src={githubLogo}
            alt="GitHub logo"
            className="md:h-18 h-12 animate-pulse hover:drop-shadow-[0_0_2rem_#FFF] lg:h-14 xl:h-16"
          />
        </a>
      </main>
    </>
  );
};

export default App;
