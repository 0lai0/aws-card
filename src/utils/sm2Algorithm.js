// SM2 演算法實現
window.calculateNextReview = (card, hasRemembered) => {
  let newInterval = card.sm2?.interval || 0;
  let newRepetitions = card.sm2?.repetitions || 0;
  let newEasiness = card.sm2?.easiness || 2.5;
  let newIsMistake = card.sm2?.isMistake || false;

  const effectiveQuality = hasRemembered ? 5 : 0;

  if (effectiveQuality >= 3) {
    // 記住了：增加複習間隔
    newRepetitions += 1;
    if (newRepetitions === 1) {
      newInterval = 1;
    } else if (newRepetitions === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(newInterval * newEasiness);
    }
    newIsMistake = false;
  } else {
    // 忘記了：重置複習週期，標記為需要複習
    newRepetitions = 0;
    newInterval = 1;
    newIsMistake = true;
  }

  newEasiness = newEasiness + (0.1 - (5 - effectiveQuality) * (0.08 + (5 - effectiveQuality) * 0.02));
  if (newEasiness < 1.3) newEasiness = 1.3;

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval);

  return {
    interval: newInterval,
    repetitions: newRepetitions,
    easiness: newEasiness,
    nextReview: nextReviewDate.toISOString(),
    dueDate: nextReviewDate.toISOString().split('T')[0],
    isMistake: newIsMistake
  };
};

// 過濾和排序要學習的卡片
window.getCardsToLearn = (cards) => {
  const today = new Date().toISOString().split('T')[0];
  
  return cards
    .filter(card => {
      // 新卡片（沒有 SM2 數據或還沒開始學習）
      if (!card.sm2 || card.sm2.repetitions === 0) {
        return true;
      }
      
      // 已學習的卡片，檢查是否到期
      const isDue = card.sm2.dueDate <= today;
      return isDue;
    })
    .sort((a, b) => {
      // 新卡片優先（repetitions = 0）
      const aIsNew = !a.sm2 || a.sm2.repetitions === 0;
      const bIsNew = !b.sm2 || b.sm2.repetitions === 0;
      
      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;
      
      // 如果都是學習過的卡片，優先顯示需要複習的卡片（忘記的）
      if (!aIsNew && !bIsNew) {
        if (a.sm2.isMistake && !b.sm2.isMistake) return -1;
        if (!a.sm2.isMistake && b.sm2.isMistake) return 1;
        return new Date(a.sm2.dueDate).getTime() - new Date(b.sm2.dueDate).getTime();
      }
      
      return 0; // 都是新卡片時保持原順序
    });
};

// 計算學習統計
window.calculateStats = (cards) => {
  const today = new Date().toISOString().split('T')[0];
  
  const totalCards = cards.length;
  const newCards = cards.filter(card => !card.sm2 || card.sm2.repetitions === 0).length;
  const reviewCards = cards.filter(card => 
    card.sm2 && card.sm2.dueDate <= today && card.sm2.repetitions > 0
  ).length;
  const reviewedCards = cards.filter(card => 
    card.sm2 && card.sm2.repetitions > 0
  ).length;
  const mastered = cards.filter(card => 
    card.sm2 && card.sm2.repetitions >= 3
  ).length;
  const mistakes = cards.filter(card => 
    card.sm2 && card.sm2.isMistake
  ).length;
  const easyCards = cards.filter(card => 
    card.sm2 && card.sm2.easiness > 2.5
  ).length;
  const hardCards = cards.filter(card => 
    card.sm2 && card.sm2.easiness < 2.0
  ).length;

  return {
    totalCards,
    newCards,
    reviewCards,
    reviewedCards,
    mastered,
    mistakes,
    easyCards,
    hardCards,
    total: totalCards, // 為了向後相容性
    masteredPercentage: totalCards === 0 ? 0 : ((mastered / totalCards) * 100).toFixed(1),
    mistakePercentage: totalCards === 0 ? 0 : ((mistakes / totalCards) * 100).toFixed(1)
  };
}; 