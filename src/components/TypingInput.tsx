import React, { useState } from "react";

const TypingInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      className="w-full max-w-md text-center"
      placeholder="Type here..."
    />
  );
};

export default TypingInput;
