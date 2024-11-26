import React, { useState } from 'react';
import CharacterDisplay from './CharacterDisplay';
import InputArea from './InputArea';
import Stats from './Stats';
import { dictionary } from '../constant/dictionary';

const GameContainer: React.FC = () => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);

  const updateCharacter = () => {
    setCurrentCharIndex((currentCharIndex + 1) % dictionary.length);
  };

  const handleInput = (input: string) => {
    const current = dictionary[currentCharIndex];

    if (input === current.code) {
      setScore(score + 10 * (combo + 1));
      setCombo(combo + 1);
      setCorrectAttempts(correctAttempts + 1);
      setTotalAttempts(totalAttempts + 1);
      updateCharacter();
    } else if (input.length >= current.code.length) {
      setCombo(0);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <CharacterDisplay character={dictionary[currentCharIndex]} />
      <InputArea onInput={handleInput} />
      <Stats score={score} combo={combo} accuracy={totalAttempts === 0 ? 0 : Math.round((correctAttempts / totalAttempts) * 100)} />
    </div>
  );
};

export default GameContainer;
