import React, { useState } from 'react';

interface CharacterDisplayProps {
  character: {
    char: string;
    hint: string;
  };
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ character }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="w-[min(18rem,85vw)] aspect-square max-w-[18rem] bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 sm:p-8 transition-all">
      <div className="text-6xl sm:text-8xl mb-2 sm:mb-4">{character.char}</div>
      <button
        className="mt-4 px-4 py-2 bg-slate-500 text-white rounded-lg flex items-center"
        onClick={() => setShowHint(!showHint)}
      >
        {showHint ? '🙈 隱藏提示' : '👀 顯示提示'}
      </button>
      <div className="text-red-500 mt-2 h-8 transition-opacity duration-300">
        {showHint ? `倉頡碼：${character.hint}` : '\u00A0'}
      </div>
    </div>
  );
};

export default CharacterDisplay;
