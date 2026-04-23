import React, { useState, useEffect, useRef } from "react";
import CharacterDisplay from "./CharacterDisplay";
import InputArea from "./InputArea";
import Stats from "./Stats";
import { Dictionary, dictionary } from "../constant/dictionary";

// Function to shuffle an array
const shuffleArray = (array: Dictionary[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const GameContainer: React.FC = () => {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [shuffledDictionary, setShuffledDictionary] = useState(
    shuffleArray(dictionary)
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [shake, setShake] = useState(false);
  const characterCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffledDictionary(shuffleArray(dictionary));
  }, []);

  const scrollCardIntoView = () => {
    characterCardRef.current?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  };

  const updateCharacter = () => {
    setCurrentCharIndex(
      (prevIndex) => (prevIndex + 1) % shuffledDictionary.length
    );
    setErrorMessage("");
  };

  const handleInput = (input: string) => {
    const current = shuffledDictionary[currentCharIndex];

    if (input === current.code) {
      setScore(score + 10 * (combo + 1));
      setCombo(combo + 1);
      setCorrectAttempts(correctAttempts + 1);
      setTotalAttempts(totalAttempts + 1);
      updateCharacter();
    } else {
      setCombo(0);
      setErrorMessage("輸入錯誤，請再試一次！");
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake animation after 500ms
    }
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center gap-4 md:gap-8 overflow-y-auto pb-[var(--vv-bottom-inset,0px)] px-2">
      <div ref={characterCardRef} className="shrink-0">
        <CharacterDisplay character={shuffledDictionary[currentCharIndex]} />
      </div>
      <div className={`shrink-0 ${shake ? "animate-shake" : ""}`}>
        <InputArea onInput={handleInput} onInputFocus={scrollCardIntoView} />
      </div>
      {errorMessage && (
        <div className="text-red-500 font-bold animate-pulse shrink-0">
          {errorMessage}
        </div>
      )}
      <div className="w-full flex justify-center md:mt-auto shrink-0 pb-2">
        <Stats
          score={score}
          combo={combo}
          accuracy={
            totalAttempts === 0
              ? 0
              : Math.round((correctAttempts / totalAttempts) * 100)
          }
        />
      </div>
    </div>
  );
};

export default GameContainer;
