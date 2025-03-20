import React, { useState, useEffect } from 'react';
import CharacterDisplay from './CharacterDisplay';
import InputArea from './InputArea';
import Stats from './Stats';
import { dictionary } from '../constant/dictionary';

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const GameContainer: React.FC = () => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [shuffledDictionary, setShuffledDictionary] = useState(shuffleArray(dictionary));
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    setShuffledDictionary(shuffleArray(dictionary));
  }, []);

  const updateCharacter = () => {
    setCurrentCharIndex((prevIndex) => (prevIndex + 1) % shuffledDictionary.length);
    setErrorMessage('');
  };

  const handleInput = (input: string) => {
    const current = shuffledDictionary[currentCharIndex];

    if (input === current.code) {
      setScore(score + 10 * (combo + 1));
      setCombo(combo + 1);
      setCorrectAttempts(correctAttempts + 1);
      setTotalAttempts(totalAttempts + 1);
      updateCharacter();
    } else if (input.length >= current.code.length) {
      setCombo(0);
      setErrorMessage('Wrong input, try again!');
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake animation after 500ms
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <CharacterDisplay character={shuffledDictionary[currentCharIndex]} />
      <div className={shake ? 'animate-shake' : ''}>
        <InputArea onInput={handleInput} />
      </div>
      {errorMessage && <div className="text-red-500 font-bold animate-pulse">{errorMessage}</div>}
      <Stats score={score} combo={combo} accuracy={totalAttempts === 0 ? 0 : Math.round((correctAttempts / totalAttempts) * 100)} />
    </div>
  );
};

export default GameContainer;
