const { useState, useCallback, useMemo, useEffect } = React;

// 學習 Hook
window.useLearning = (allCards, updateCardSM2) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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

  // 重置狀態當卡片變化
  useEffect(() => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
  }, [cardsToLearn]);

  // 處理回答
  const handleAnswer = useCallback((hasRemembered) => {
    if (cardsToLearn.length === 0) return;

    const currentCard = cardsToLearn[currentCardIndex];
    const newSM2 = window.calculateNextReview(currentCard, hasRemembered);
    
    // 更新卡片的 SM2 資料
    const originalCardIndex = allCards.findIndex(card => 
      card.question === currentCard.question && card.answer === currentCard.answer
    );
    
    if (originalCardIndex !== -1) {
      updateCardSM2(originalCardIndex, newSM2);
    }

    // 移動到下一張卡片
    setCurrentCardIndex((prev) => (prev + 1) % cardsToLearn.length);
    setShowAnswer(false);
  }, [cardsToLearn, currentCardIndex, allCards, updateCardSM2]);

  // 切換答案顯示
  const toggleAnswer = useCallback(() => {
    setShowAnswer(prev => !prev);
  }, []);

  return {
    cardsToLearn,
    currentCardIndex,
    showAnswer,
    toggleAnswer,
    handleAnswer
  };
}; 