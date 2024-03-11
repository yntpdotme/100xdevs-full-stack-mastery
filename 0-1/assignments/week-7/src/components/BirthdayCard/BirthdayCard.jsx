import React, {useState, useEffect, useRef} from 'react';
import html2canvas from 'html2canvas';
import {birthdayCards} from './BirthdayCardData';

import './BirthdayCard.css';

const BirthdayCard = () => {
  const [name, setName] = useState('');
  const [showCards, setShowCards] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setShowCards(false);
    inputRef.current.focus();
  }, [name]);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const renderBirthdayCards = () => {
    setLoading(true);

    setShowCards(true);

    // Simulate loader delay for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleDownload = card => {
    const cardElement = document.getElementById(`bday-card-${card.id}`);

    html2canvas(cardElement).then(canvas => {
      const imgURL = canvas.toDataURL('image/png');

      // Trigger download
      const link = document.createElement('a');
      link.href = imgURL;
      link.download = `${name
        .trim()
        .toLocaleLowerCase()
        .replace(/\s+/g, '_')}_birthday_card.jpg`;
      link.click();
    });
  };

  return (
    <div className="bday-card">
      <div className="bday-card__input">
        <input
          type="text"
          className="input"
          placeholder="Enter the name of person"
          ref={inputRef}
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={renderBirthdayCards} disabled={!name.trim()}>
          Generate
        </button>
      </div>

      {name && loading && showCards && <div className="loader"></div>}

      {name && !loading && showCards && (
        <div className="bday-card__output">
          {birthdayCards.map(card => (
            <React.Fragment key={card.id}>
              <div className="bday-card__layout" id={`bday-card-${card.id}`}>
                <img
                  className="bday-card__image"
                  src={card.image}
                  alt={card.title}
                />
                <div className="bday-card__text">
                  <h3 className="bday-card__title">{card.title}</h3>
                  <p className="bday-card__message">
                    {card.message.replace('{{name}}', name)}
                  </p>
                </div>
              </div>
              <button onClick={() => handleDownload(card)}>Download</button>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthdayCard;
