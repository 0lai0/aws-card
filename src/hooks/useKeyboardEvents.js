const { useEffect } = React;

// 鍵盤事件處理 Hook
window.useKeyboardEvents = (mode, toggleAnswer, handleAnswer, showAnswer) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (mode !== 'learn') return;

      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        toggleAnswer();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (showAnswer) {
          handleAnswer(true);
        } else {
          toggleAnswer();
        }
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (showAnswer) {
          handleAnswer(false);
        } else {
          toggleAnswer();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mode, toggleAnswer, handleAnswer, showAnswer]);
}; 