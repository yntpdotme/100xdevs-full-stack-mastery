import {Route, Routes} from 'react-router-dom';
import './App.css';

import {
  HomePage,
  ProfilePage,
  BackgroundChangerPage,
  ParaGeneratorPage,
  GitHubCardPage,
  OTPLoginPage,
  BirthdayCardPage,
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/background-changer" element={<BackgroundChangerPage />} />
        <Route path="/para-generator" element={<ParaGeneratorPage />} />
        <Route path="/github-card" element={<GitHubCardPage />} />
        <Route path="/login" element={<OTPLoginPage />} />
        <Route path="/bday-card" element={<BirthdayCardPage />} />
      </Routes>

      <p className="read-the-docs">
        Click on the GitHub logo to see source code
      </p>
    </>
  );
}

export default App;
