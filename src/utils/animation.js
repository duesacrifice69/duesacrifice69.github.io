import { useState, useEffect, useCallback } from "react";

export const useTypewriterEffect = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1000,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const wait = useCallback(async (miliSec) => {
    await new Promise((resolve) => setTimeout(resolve, miliSec));
  }, []);

  const typeText = useCallback(async () => {
    const phrase = phrases[currentPhraseIndex];
    const currentPhraseLength = phrase.length;

    if (isTyping) {
      if (currentText.length === currentPhraseLength) {
        await wait(pauseTime);
        setIsTyping(false);
      } else {
        await wait(typingSpeed);
        setCurrentText((c) => phrase.substring(0, c.length + 1));
      }
    } else {
      if (currentText.length === 0) {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
      await wait(deletingSpeed);
      setCurrentText((c) => phrase.substring(0, c.length - 1));
    }
  }, [currentText, isTyping]);

  useEffect(() => {
    const effect = async () => {
      await typeText();
    };
    effect();
  }, [typeText]);

  return currentText;
};
