import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import { RadicalGuide } from "./components/RadicalGuide";
import { useVisualViewportInset } from "./hooks/useVisualViewportInset";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  useVisualViewportInset();

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-dvh flex flex-col transition-all ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-900"
      }`}
    >
      <div className="shrink-0 flex justify-between items-center p-4">
        <RadicalGuide />
        <div
          className="p-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 shadow-lg"
          onClick={() => setDarkMode(!darkMode)}
        >
          🌓
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        <Header />
        <GameContainer />
      </div>
    </div>
  );
};

export default App;
