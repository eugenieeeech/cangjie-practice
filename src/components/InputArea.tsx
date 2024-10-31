import React, { useState } from 'react';

interface InputAreaProps {
  onInput: (input: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onInput }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    onInput(value);
  };

  return (
    <div className="w-full max-w-md text-center">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="請輸入倉頡碼..."
        className="w-full p-4 text-xl border-none rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg text-center"
      />
    </div>
  );
};

export default InputArea;
