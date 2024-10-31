import React from 'react';

interface CharacterDisplayProps {
  character: {
    char: string;
    hint: string;
    meaning: string;
  };
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ character }) => (
  <div className="w-72 h-72 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 transition-all">
    <div className="text-8xl mb-4">{character.char}</div>
    <div className="text-xl text-red-500 mb-4">倉頡碼：{character.hint}</div>
    <div className="text-lg text-gray-600 dark:text-gray-400">{character.meaning}</div>
  </div>
);

export default CharacterDisplay;
