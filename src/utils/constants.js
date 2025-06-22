// SM2 演算法的初始參數
window.INITIAL_SM2_PARAMS = {
  interval: 0, // 複習間隔 (天)
  repetitions: 0, // 連續記住次數
  easiness: 2.5, // 難度係數
  nextReview: new Date().toISOString(), // 下次複習日期
  dueDate: new Date().toISOString().split('T')[0], // 下次複習日期 (YYYY-MM-DD)
  isMistake: false // 是否需要複習（忘記了）
};

// 工具函數：為卡片添加 SM2 初始參數
window.initializeCardSM2 = (card) => {
  return {
    ...card,
    id: card.id || `card_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // 添加唯一ID
    sm2: { ...window.INITIAL_SM2_PARAMS }
  };
};

// 工具函數：初始化卡片陣列
window.initializeCards = (cardsData) => {
  return cardsData.map(card => window.initializeCardSM2(card));
};

// 取得初始化後的 AWS 卡片資料（延遲載入）
window.getInitialAwsCards = () => {
  // 確保 awsCardsData 已載入
  if (window.awsCardsData) {
    return window.initializeCards(window.awsCardsData);
  }
  // 回退：如果資料尚未載入，返回空陣列
  console.warn('awsCardsData 尚未載入，返回空陣列');
  return [];
};

// 用 getter 來確保每次都動態取得最新資料
Object.defineProperty(window, 'initialAwsCards', {
  get: function() {
    return window.getInitialAwsCards();
  },
  configurable: true
}); 