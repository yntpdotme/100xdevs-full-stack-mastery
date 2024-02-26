import {useState} from 'react';
import reactLogo from './assets/react.svg';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

function App() {
  const [cardData, setCardData] = useState(null);

  const generateCard = data => {
    setCardData(data);
  };

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <div className="App">
        <h1>E-Card Generator</h1>
        <Form onGenerate={generateCard} />
        {cardData && <Card {...cardData} />}
      </div>
    </>
  );
}

export default App;
