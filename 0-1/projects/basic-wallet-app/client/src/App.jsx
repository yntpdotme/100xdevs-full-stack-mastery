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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/me" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
