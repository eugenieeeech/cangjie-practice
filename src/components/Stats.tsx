import React from 'react';

interface StatsProps {
  score: number;
  combo: number;
  accuracy: number;
}

const Stats: React.FC<StatsProps> = ({ score, combo, accuracy }) => (
  <div className="flex justify-around w-full max-w-md mt-8">
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <h3 className="text-xl">分數</h3>
      <p>{score}</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <h3 className="text-xl">連擊</h3>
      <p>{combo}</p>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <h3 className="text-xl">準確率</h3>
      <p>{accuracy}%</p>
    </div>
  </div>
);

export default Stats;
