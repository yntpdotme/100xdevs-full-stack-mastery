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
import {NavBar, SideBar, SourceCode} from './components';
import {soureCodeLink} from './constants';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  const location = useLocation();

  const renderNavigation = !['/', '/signin', '/signup'].includes(
    location.pathname,
  );

  return (
    <>
      <header>{renderNavigation && <NavBar />}</header>

      <section className="flex">
        {renderNavigation && (
          <aside>
            <SideBar />
          </aside>
        )}
        <main
          className={`h-screen basis-full overflow-y-auto ${!renderNavigation && `max-container relative`}`}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transfer" element={<TransferPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>

          {!renderNavigation && (
            <div className="pointer-events-auto absolute right-0 top-6 px-2 py-3 lg:right-5">
              <ThemeToggler />
            </div>
          )}

          <SourceCode link={soureCodeLink} icon={githubLogo} />
        </main>
      </section>
    </>
  );
};

export default App;
