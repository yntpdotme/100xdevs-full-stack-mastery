import {Route, Routes} from 'react-router-dom';

import {HomePage} from './components';
import {SignInPage, SignUpPage, TodosPage} from './pages';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </>
  );
};

export default App;
