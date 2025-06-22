const { useState, useCallback, useMemo, useEffect } = React;

// 學習 Hook
window.useLearning = (allCards, updateCardSM2) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState(new Set()); // 追蹤已學習的卡片
  const [isRandomMode, setIsRandomMode] = useState(false); // 隨機模式開關
  const [randomizedCards, setRandomizedCards] = useState([]); // 隨機化後的卡片順序

  // 隨機洗牌函數
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // 獲取要學習的卡片
  const cardsToLearn = useMemo(() => {
    console.log('useLearning Debug Info:');
    console.log('allCards length:', allCards.length);
    console.log('allCards:', allCards);
    
    const filtered = window.getCardsToLearn(allCards);
    console.log('filtered cardsToLearn length:', filtered.length);
    console.log('filtered cardsToLearn:', filtered);
    
    return filtered;
  }, [allCards]);

  // 當卡片變化或隨機模式切換時，重新洗牌
  useEffect(() => {
    if (isRandomMode && cardsToLearn.length > 0) {
      const shuffled = shuffleArray(cardsToLearn);
      setRandomizedCards(shuffled);
      console.log('隨機模式：卡片已洗牌');
    } else {
      setRandomizedCards(cardsToLearn);
    }
  }, [cardsToLearn, isRandomMode, shuffleArray]);

  // 獲取當前使用的卡片陣列
  const currentCards = isRandomMode ? randomizedCards : cardsToLearn;

  // 重置狀態當卡片變化（但不重置已學習的追蹤）
  useEffect(() => {
    if (currentCardIndex >= currentCards.length && currentCards.length > 0) {
      setCurrentCardIndex(0);
    }
    setShowAnswer(false);
  }, [currentCards, currentCardIndex]);

  // 處理回答
  const handleAnswer = useCallback((hasRemembered) => {
    if (currentCards.length === 0) return;

    const currentCard = currentCards[currentCardIndex];
    const newSM2 = window.calculateNextReview(currentCard, hasRemembered);
    
    console.log('回答卡片:', currentCard.question);
    console.log('記住了:', hasRemembered);
    console.log('新的 SM2 資料:', newSM2);
    
    // 更新卡片的 SM2 資料 - 使用更可靠的比較方式
    const originalCardIndex = allCards.findIndex((card) => {
      // 優先使用 ID 進行比較
      if (card.id && currentCard.id && card.id === currentCard.id) return true;
      // 回退到內容比較
      return card.question === currentCard.question && 
             card.answer === currentCard.answer &&
             card.category === currentCard.category;
    });
    
    if (originalCardIndex !== -1) {
      updateCardSM2(originalCardIndex, newSM2);
    }

    // 將當前卡片標記為已學習 - 使用更唯一的鍵
    const cardKey = `${currentCard.question}_${currentCard.answer}_${originalCardIndex}`;
    setStudiedCards(prev => {
      const newSet = new Set(prev);
      newSet.add(cardKey);
      // 防止記憶體洩漏：限制 Set 大小
      if (newSet.size > 1000) {
        const entries = Array.from(newSet);
        return new Set(entries.slice(-500)); // 保留最近的 500 個
      }
      return newSet;
    });

    // 移動到下一張可學習的卡片
    const nextIndex = currentCardIndex + 1;
    if (nextIndex < currentCards.length) {
      setCurrentCardIndex(nextIndex);
    } else {
      // 如果已經是最後一張卡片，檢查是否還有其他卡片可學習
      setCurrentCardIndex(0);
      // 使用 React 的狀態更新回調來避免競爭條件
      setShowAnswer(false);
      
      // 延遲處理剩餘卡片檢查
      requestAnimationFrame(() => {
        const remainingCards = window.getCardsToLearn(allCards);
        if (remainingCards.length === 0) {
          setStudiedCards(new Set());
        } else if (isRandomMode) {
          // 重新洗牌
          const shuffled = shuffleArray(remainingCards);
          setRandomizedCards(shuffled);
        }
      });
      return; // 早期返回避免重複設置狀態
    }
    
    setShowAnswer(false);
  }, [currentCards, currentCardIndex, allCards, updateCardSM2, isRandomMode, shuffleArray]);

  // 切換答案顯示
  const toggleAnswer = useCallback(() => {
    setShowAnswer(prev => !prev);
  }, []);

  // 切換隨機模式
  const toggleRandomMode = useCallback(() => {
    setIsRandomMode(prev => {
      const newMode = !prev;
      console.log('切換隨機模式:', newMode ? '開啟' : '關閉');
      return newMode;
    });
  }, []);

  // 重新洗牌（手動洗牌）
  const reshuffleCards = useCallback(() => {
    if (cardsToLearn.length > 0) {
      const shuffled = shuffleArray(cardsToLearn);
      setRandomizedCards(shuffled);
      setCurrentCardIndex(0);
      setShowAnswer(false);
      console.log('手動重新洗牌完成');
    }
  }, [cardsToLearn, shuffleArray]);

  // 重置學習狀態
  const resetLearning = useCallback(() => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    // 如果是隨機模式，重新洗牌
    if (isRandomMode && cardsToLearn.length > 0) {
      const shuffled = shuffleArray(cardsToLearn);
      setRandomizedCards(shuffled);
    }
  }, [isRandomMode, cardsToLearn, shuffleArray]);

  // 強制重新開始所有卡片練習（忽略 SM2 狀態）
  const restartAllCards = useCallback(() => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    
    // 重新獲取所有卡片（包括今天不需要複習的）
    const allAvailableCards = allCards.filter(card => card.question && card.answer);
    
    if (isRandomMode && allAvailableCards.length > 0) {
      const shuffled = shuffleArray(allAvailableCards);
      setRandomizedCards(shuffled);
    } else {
      setRandomizedCards(allAvailableCards);
    }
    
    console.log('重新開始所有卡片練習，卡片數量:', allAvailableCards.length);
  }, [allCards, isRandomMode, shuffleArray]);

  // 檢查是否已完成所有學習
  const isAllLearningCompleted = useMemo(() => {
    return cardsToLearn.length === 0 && allCards.length > 0;
  }, [cardsToLearn.length, allCards.length]);

  return {
    cardsToLearn: currentCards,
    currentCardIndex,
    showAnswer,
    toggleAnswer,
    handleAnswer,
    resetLearning,
    isRandomMode,
    toggleRandomMode,
    reshuffleCards,
    restartAllCards,
    isAllLearningCompleted
  };
}; 