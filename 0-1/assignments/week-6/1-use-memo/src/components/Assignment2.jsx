/*
  Assignment 2:
    In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
    The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
    You will learn something new here, specifically how you have to pass more than one value in the dependency array.
*/

import {useMemo, useState} from 'react';

const words = ['hi', 'my', 'name', 'is', 'for', 'to', 'random', 'word'];
const TOTAL_LINES = 1000;

const generateSentences = () => {
  const ALL_WORDS = [];
  for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = words
      .map(() => words[Math.floor(words.length * Math.random())])
      .join(' ');
    ALL_WORDS.push(sentence);
  }
  return ALL_WORDS;
};

const Assignment2 = () => {
  const [sentences, setSentences] = useState(generateSentences());
  const [filter, setFilter] = useState('');

  const filteredSentences = useMemo(
    () => sentences.filter(sentence => sentence.includes(filter)),
    [sentences, filter],
  );

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setFilter(e.target.value);
        }}
        style={{
          padding: ' 10px 15px',
          border: '0',
          'border-radius': '8px',
          background: '#1a1a1a',
          'font-size': '18px',
        }}
        placeholder="enter the keywords"
      />
      <br />
      <br />

      {filteredSentences.map((sentence, index) => (
        <div
          style={{'text-align': 'left', padding: '3px 0 3px 150px'}}
          key={index}
        >
          {sentence}
        </div>
      ))}
    </div>
  );
};

export default Assignment2;
