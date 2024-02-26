import reactLogo from './assets/react.svg';
import './App.css';
import Assignment1 from './components/Assignment1';
import Assignment2 from './components/Assignment2';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>useRef Assignments</h1>

      {/* <Assignment1 /> */}
      <Assignment2 />
    </>
  );
}

export default App;
