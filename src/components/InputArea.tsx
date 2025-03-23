import React, { useState } from "react";
import { radicals } from "./RadicalGuide";

interface InputAreaProps {
  onInput: (input: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onInput }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInput(value.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === " " || e.key === "Enter") && input.length > 0) {
      onInput(input);
      // TODO: don not clear when the answer is wrong
      setInput("");
    }
  };

  const radicalConversion = (input: string): string => {
    const radicalKeys = input.toUpperCase();
    let converted: string = "";
    radicalKeys.split("").map((key) => {
      radicals.find((radical) => {
        if (radical.key === key) {
          converted += radical.radical;
        }
      });
    });
    return converted;
  };

  return (
    <div className="w-full max-w-md text-center">
      <div className="text-xl font-bold dark:text-white">
        倉頡碼: {radicalConversion(input)}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="請輸入倉頡碼(英文鍵)"
        className="border-none w-full p-4 text-xl rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg text-center"
      />
    </div>
  );
};

export default InputArea;
