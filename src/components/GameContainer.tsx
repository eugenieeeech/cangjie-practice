import React, { useState } from 'react';
import CharacterDisplay from './CharacterDisplay';
import InputArea from './InputArea';
import Stats from './Stats';

const characters = [
  { char: '字', code: 'jnd', meaning: '文字 / character', hint: '一十大' },
  { char: '我', code: 'hqi', meaning: '我 / I, me', hint: '手竹戈' },
  { char: '你', code: 'oni', meaning: '你 / you', hint: '人心戈' },
  { char: '好', code: 'vnd', meaning: '好 / good', hint: '女子大' },
  // Add more characters get from db?
];

const GameContainer: React.FC = () => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);

  const updateCharacter = () => {
    setCurrentCharIndex((currentCharIndex + 1) % characters.length);
  };

  const handleInput = (input: string) => {
    const current = characters[currentCharIndex];

    if (input === current.code) {
      setScore(score + 10 * (combo + 1));
      setCombo(combo + 1);
      setCorrectAttempts(correctAttempts + 1);
      setTotalAttempts(totalAttempts + 1);
      updateCharacter();
    } else if (input.length >= current.code.length) {
      setCombo(0);
      setTotalAttempts(totalAttempts + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <CharacterDisplay character={characters[currentCharIndex]} />
      <InputArea onInput={handleInput} />
      <Stats score={score} combo={combo} accuracy={totalAttempts === 0 ? 0 : Math.round((correctAttempts / totalAttempts) * 100)} />
    </div>
  );
};

export default GameContainer;
