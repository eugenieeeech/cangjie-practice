import { useState } from "react";

const radicals = [
  { symbol: "⼀ (M)", description: "M" },
  { symbol: "⼁", description: "Line" },
  // Add more radicals as needed
];

export const RadicalGuide: React.FC = () => {
  const [showRadicalGuide, setShowRadicalGuide] = useState<boolean>(false);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg relative"
      onClick={() => setShowRadicalGuide(true)}
      onMouseEnter={() => setShowRadicalGuide(true)}
      onMouseLeave={() => setShowRadicalGuide(false)}
    >
      <div className="font-bold dark:text-white">倉頡碼參考</div>
      {showRadicalGuide && (
        <ul className="mt-4 absolute top-full left-0 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-100">
          {radicals.map((radical, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span className="font-bold">{radical.symbol}</span>
              <span>{radical.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
