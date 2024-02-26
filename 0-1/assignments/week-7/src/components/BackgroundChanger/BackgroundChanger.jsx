import {useState} from 'react';
import './BackgroundChanger.css';

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = color => {
    setBackgroundColor(color);
  };

  return (
    <div className="background-changer" style={{backgroundColor}}>
      <button onClick={() => handleColorChange('#60a5fa')}>Light Blue</button>
      <button onClick={() => handleColorChange('#f9a8d4')}>Light Pink</button>
      <button onClick={() => handleColorChange('#b0e57c')}>Light Green</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default BackgroundChanger;
