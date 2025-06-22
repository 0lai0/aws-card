const { useEffect } = React;

// 鍵盤事件處理 Hook
window.useKeyboardEvents = (mode, toggleAnswer, handleAnswer, showAnswer, toggleRandomMode, reshuffleCards) => {
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
      } else if (event.key === 'r' || event.key === 'R') {
        // R 鍵切換隨機模式
        event.preventDefault();
        if (toggleRandomMode) {
          toggleRandomMode();
        }
      } else if (event.key === 's' || event.key === 'S') {
        // S 鍵重新洗牌
        event.preventDefault();
        if (reshuffleCards) {
          reshuffleCards();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mode, toggleAnswer, handleAnswer, showAnswer, toggleRandomMode, reshuffleCards]);
}; 