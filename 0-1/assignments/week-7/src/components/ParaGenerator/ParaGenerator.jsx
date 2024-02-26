import {useState, useEffect, useRef} from 'react';
import {GoogleGenerativeAI} from '@google/generative-ai';

import './ParaGenerator.css';

const ParaGenerator = () => {
  const [wordCount, setWordCount] = useState('');
  const [generatedPara, setGeneratedPara] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleWordCountChange = e => {
    const count = e.target.value.trim();
    setWordCount(count);
  };

  const generateParagraph = async () => {
    try {
      setLoading(true);

      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});

      const prompt = `Generate a paragraph with exactly ${wordCount} words. Make sure the sentence structure is grammatically correct and flows naturally. Consider helping verbs as words.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      setGeneratedPara(text);
      setWordCount('');
    } catch (error) {
      console.error('Error generating paragraph:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="para-generator">
      <div className="para-generator__input">
        <input
          type="number"
          className="input spin-button-none"
          placeholder="Enter Number of Words"
          ref={inputRef}
          value={wordCount}
          onChange={handleWordCountChange}
        />
        <button onClick={generateParagraph} disabled={loading || wordCount < 1}>
          Generate
        </button>
      </div>

      {loading && <div className="loader"></div>}

      {generatedPara && !loading && (
        <div className="para-generator__area">{generatedPara}</div>
      )}
    </div>
  );
};

export default ParaGenerator;
