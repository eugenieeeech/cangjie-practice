import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import { RadicalGuide } from "./components/RadicalGuide";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen align-centre transition-all  ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-900"
      }`}
    >
      <div className="justify-between top-8 transform  p-4 flex items-center">
        <RadicalGuide />
        <div
          className="p-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 shadow-lg"
          onClick={() => setDarkMode(!darkMode)}
        >
          🌓
        </div>
      </div>
      <Header />
      <GameContainer />
    </div>
  );
};

export default App;
