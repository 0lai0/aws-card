// SM2 演算法的初始參數
window.INITIAL_SM2_PARAMS = {
  interval: 0, // 複習間隔 (天)
  repetitions: 0, // 連續記住次數
  easiness: 2.5, // 難度係數
  nextReview: new Date().toISOString(), // 下次複習日期
  dueDate: new Date().toISOString().split('T')[0], // 下次複習日期 (YYYY-MM-DD)
  isMistake: false // 是否需要複習（忘記了）
};

// 初始 AWS 服務閃卡資料
window.initialAwsCards = [
  {
    question: "Amazon Bedrock 的護欄功能 (Guardrails) 有什麼作用？",
    answer: "護欄功能可以確保生成的內容和主題適合兒童，並進行內容過濾以防止模型在回應中包含患者個人資訊或違反政策，並可設定警報。",
    category: "Amazon Bedrock",
    difficulty: "中等",
    sm2: {
      interval: 0,
      repetitions: 0,
      easiness: 2.5,
      nextReview: new Date().toISOString(),
      dueDate: new Date().toISOString().split('T')[0],
      isMistake: false
    }
  },
  {
    question: "Amazon Bedrock 可以用來建立什麼樣的互動應用程式？",
    answer: "可以建立互動應用程式，根據經典故事生成適合兒童的故事。",
    category: "Amazon Bedrock",
    difficulty: "簡單",
    sm2: {
      interval: 0,
      repetitions: 0,
      easiness: 2.5,
      nextReview: new Date().toISOString(),
      dueDate: new Date().toISOString().split('T')[0],
      isMistake: false
    }
  },
  {
    question: "Amazon Bedrock 的主要用途是什麼？",
    answer: "運行基礎模型 (FM)，並確保只有授權使用者可以調用模型。",
    category: "Amazon Bedrock",
    difficulty: "簡單",
    sm2: {
      interval: 0,
      repetitions: 0,
      easiness: 2.5,
      nextReview: new Date().toISOString(),
      dueDate: new Date().toISOString().split('T')[0],
      isMistake: false
    }
  }
]; 