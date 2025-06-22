window.initialAwsCards = [
  {
    question: "一位 AI 實務者在 Amazon Bedrock 上訓練了包含機密資料的資料集，並希望確保模型不會生成基於機密資料的推論結果。該如何防止？ \nA. 刪除模型並重新訓練 \nB. 使用動態資料遮蔽 \nC. 使用 Amazon SageMaker 加密推論資料 \nD. 使用 AWS KMS 加密機密資料 ",
    answer: "A. 刪除模型並重新訓練 ",
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
    question: "Amazon OpenSearch Service 的哪個功能可以建立向量資料庫應用程式？ \nA. 與 Amazon S3 整合 \nB. 支援地理空間索引\nC. 可擴展的索引管理\nD. 即時資料分析",
    answer: "C. 可擴展的索引管理",
    category: "Amazon OpenSearch Service",
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
    question: "一家公司想顯示過去 12 個月內各零售地點暢銷產品的銷售總額，應該使用哪種 AWS 解決方案來自動生成圖表？ \nA. Amazon Q in Amazon EC2 \nB. Amazon Q Developer\nC. Amazon Q in Amazon QuickSight\nD. Amazon Q in AWS Chatbot",
    answer: "C. Amazon Q in Amazon QuickSight",
    category: "Amazon Q",
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
    question: "一家公司想要建立一個互動應用程式，能根據經典故事生成適合兒童的故事，且希望內容和主題適合兒童，該使用哪項 AWS 服務或功能？ \nA. Amazon Rekognition\nB. Amazon Bedrock playgrounds\nC. Amazon Bedrock 的護欄功能 \nD. Amazon Bedrock 的代理功能",
    answer: "C. Amazon Bedrock 的護欄功能",
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
    question: "一家公司已開發一個圖像分類的 ML 模型，想要將此模型部署到生產環境以供網頁應用程式使用，而不需管理底層基礎設施，該如何實現？ \nA. 使用 Amazon SageMaker 無伺服器推論來部署模型 \nB. 使用 Amazon CloudFront 部署模型 \nC. 使用 Amazon API Gateway 來託管模型並提供推論 \nD. 使用 AWS Batch 託管模型並提供推論 ",
    answer: "A. 使用 Amazon SageMaker 無伺服器推論來部署模型 ",
    category: "Amazon SageMaker",
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
    question: "一家公司擁有大量未標記的客戶資料並希望根據資料為客戶分層以便行銷，應該使用哪種方法來滿足需求？ \nA. 監督式學習 \nB. 非監督式學習 \nC. 強化學習 \nD. 基於人類回饋的強化學習 (RLHF) ",
    answer: "B. 非監督式學習 ",
    category: "機器學習",
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
    question: "一家公司每季度進行預測以最佳化操作以滿足預期需求，並使用 ML 模型進行預測。AI 實務者希望在報告中提供透明度和解釋性，應該包含哪些內容？ \nA. 模型訓練程式碼 \nB. 部分依賴圖 (PDP) \nC. 訓練樣本資料 \nD. 模型收斂表",
    answer: "B. 部分依賴圖 (PDP)",
    category: "機器學習",
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
    question: "以下哪一項是生成式 AI 模型的使用案例？ \nA. 使用入侵偵測系統增強網路安全\nB. 根據文字描述建立寫實圖像以用於數位行銷\nC. 增強資料庫效能以使用最佳化索引\nD. 分析財務資料以預測股票市場趨勢",
    answer: "B. 根據文字描述建立寫實圖像以用於數位行銷",
    category: "生成式 AI",
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
    question: "一位 AI 實務者使用大型語言模型 (LLM) 為行銷活動建立內容，但生成的內容雖然聽起來合理且真實，但實際上不正確。這是什麼問題？ \nA. 資料洩露 \nB. 幻覺 \nC. 過擬合 \nD. 欠擬合 ",
    answer: "B. 幻覺 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家貸款公司想開發基於生成式 AI 的解決方案，並希望在符合業務標準的基礎上提供新客戶折扣，並希望模型的使用能負責且減少對某些客戶的負面影響。該如何操作？(選擇兩項) \nA. 偵測資料中的不平衡或差異。 \nB. 確保模型運行頻繁。 \nC. 評估模型的行為，以便公司可以向利害關係人提供透明度。 \nD. 使用回憶導向的概要評估 (ROUGE) 技術以確保模型 100% 的準確性。 \nE. 確保模型的推論時間在可接受的限制內。 ",
    answer: "A. 偵測資料中的不平衡或差異, C. 評估模型的行為，以便向利害關係人提供透明度 ",
    category: "生成式 AI",
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
    question: "一家醫療公司正在客製化一個用於診斷的基礎模型，該模型需要滿足透明性和解釋性以符合法規要求，該如何操作？ \nA. 使用 Amazon Inspector 設定安全和合規。 \nB. 使用 Amazon SageMaker Clarify 生成簡單的指標、報告和範例。 \nC. 使用 Amazon Macie 加密和保護訓練資料。 \nD. 收集更多資料。使用 Amazon Rekognition 將自訂標籤新增至資料。 ",
    answer: "B. 使用 Amazon SageMaker Clarify 生成簡單的指標、報告和範例 ",
    category: "Amazon SageMaker",
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
    question: "一家公司正在建構一個生成保護眼鏡圖片的解決方案，該解決方案需要高精度並且必須最小化錯誤標註風險，該如何實現？ \nA. 使用 Amazon SageMaker Ground Truth Plus 進行人工審核 \nB. 使用 Amazon Bedrock 知識庫進行資料增強\nC. 使用 Amazon Rekognition 進行圖像識別\nD. 使用 Amazon QuickSight 進行資料摘要",
    answer: "A. 使用 Amazon SageMaker Ground Truth Plus 進行人工審核 ",
    category: "Amazon SageMaker",
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
    question: "一家安全公司使用 Amazon Bedrock 運行基礎模型 (FM)，希望確保只有授權使用者可以調用模型並識別未授權的存取嘗試。該使用哪個 AWS 服務來識別未授權的存取者？ \nA. AWS Audit Manager \nB. AWS CloudTrail \nC. Amazon Fraud Detector \nD. AWS Trusted Advisor ",
    answer: "B. AWS CloudTrail ",
    category: "AWS 安全服務",
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
    question: "一家公司手動審核提交的 PDF 格式的履歷，隨著公司成長，履歷的數量超出公司審核能力。公司需要一個自動系統將 PDF 履歷轉換為純文字以進行進一步處理，應該使用哪項 AWS 服務？ \nA. Amazon Textract\nB. Amazon Personalize\nC. Amazon Lex\nD. Amazon Transcribe",
    answer: "A. Amazon Textract ",
    category: "AWS AI 服務",
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
    question: "一家公司想使用大型語言模型 (LLM) 與 Amazon Bedrock 來開發一個針對公司產品手冊的聊天介面。手冊儲存為 PDF 檔案。 \n哪個解決方案最具成本效益？ \nA. 使用提示工程將一個 PDF 檔案作為上下文新增至使用者提示中，當提示提交至 Amazon Bedrock 時。 \nB. 使用提示工程將所有 PDF 檔案作為上下文新增至使用者提示中，當提示提交至 Amazon Bedrock 時。 \nC. 使用所有 PDF 文件微調 Amazon Bedrock 模型。  使用微調的模型來處理使用者提示。 \nD. 將 PDF 文件上傳至 Amazon Bedrock 知識庫。  當使用者提交提示至 Amazon Bedrock 時，使用知識庫提供上下文。 ",
    answer: "D. 將 PDF 文件上傳至 Amazon Bedrock 知識庫。  當使用者提交提示至 Amazon Bedrock 時，使用知識庫提供上下文。 ",
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
    question: "哪個術語描述了 AI 和自然語言處理 (NLP) 模型用於改善文字資訊理解的數位表示？ \nA. 嵌入 (Embeddings)\nB. 符號 (Tokens)\nC. 模型 (Models)\nD. 二進位 (Binaries)",
    answer: "A. 嵌入 (Embeddings)",
    category: "自然語言處理 (NLP)",
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
    question: "一家公司正在建構一個應用程式，需要生成基於現有資料的合成資料。 \n哪種類型的模型可以滿足此需求？ \nA. 生成對抗網路 (GAN) \nB. XGBoost \nC. 殘差類神經網路 \nD. WaveNet ",
    answer: "A. 生成對抗網路 (GAN) ",
    category: "生成式 AI",
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
    question: "一家公司希望使用生成式 AI 來提高開發人員的生產力和軟體開發。 \n公司希望使用 Amazon Q Developer。 \nAmazon Q Developer 可以如何協助公司滿足這些需求？ \nA. 建立軟體程式碼片段、參考追蹤和開放原始碼授權追蹤。 \nB. 無需佈建或管理伺服器即可運行應用程式。 \nC. 啟用語音指令進行編碼並提供自然語言搜尋。 \nD. 使用 ML 模型將音訊檔案轉換為文字文件。 ",
    answer: "C. 啟用語音指令進行編碼並提供自然語言搜尋。 ",
    category: "Amazon Q Developer",
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
    question: "一家公司希望使用 Amazon Bedrock 建立應用程式。 \n公司預算有限且偏好彈性，不希望長期承諾。 \n哪種 Amazon Bedrock 定價模型符合這些需求？ \nA. 隨需 (On-Demand) \nB. 模型客製化 \nC. 佈建輸送量 (Provisioned Throughput) \nD. Spot 執行個體 ",
    answer: "A. 隨需 (On-Demand) ",
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
    question: "一家數位設備公司希望預測客戶對記憶體硬體的預測。 \n公司沒有編碼經驗或 ML 演算法知識，需要開發資料驅動的預測模型。 \n公司需要對內部資料和外部資料進行分析。 \n哪種解決方案符合這些需求？ \nA. 將資料儲存在 Amazon S3 中。使用 Amazon SageMaker 內建演算法建立 ML 模型和需求預測，這些演算法使用 Amazon S3 中的資料。 \nB. 將資料匯入 Amazon SageMaker Data Wrangler 中。使用 SageMaker 內建演算法建立 ML 模型和需求預測。 \nC. 將資料匯入 Amazon SageMaker Data Wrangler 中。使用 Amazon Personalize Trending-Now 配方建構 ML 模型和需求預測。 \nD. 將資料匯入 Amazon SageMaker Canvas 中。透過在 SageMaker Canvas 中選取資料值來建構 ML 模型和需求預測。 ",
    answer: "D. 將資料匯入 Amazon SageMaker Canvas 中。透過在 SageMaker Canvas 中選取資料值來建構 ML 模型和需求預測。 ",
    category: "Amazon SageMaker",
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
    question: "在生成式 AI 模型的上下文中，什麼是「符號」？ \nA. 符號是生成式 AI 模型操作的輸入和輸出的基本單位，代表單字、子單字或其他語言單位。 \nB. 符號是生成式 AI 模型中使用的單字或概念的數學表示。 \nC. 符號是為特定任務微調的生成式 AI 模型的預訓練權重。 \nD. 符號是給予生成式 AI 模型以產生輸出的特定提示或指令。 ",
    answer: "A. 符號是生成式 AI 模型操作的輸入和輸出的基本單位，代表單字、子單字或其他語言單位。 ",
    category: "生成式 AI",
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
    question: "一位 AI 實務者正在使用 Amazon Bedrock 基礎模型來摘要客服部門的對話記錄。 \nAI 實務者希望儲存調用日誌以監控模型輸入和輸出資料。 \nAI 實務者應該使用哪種策略？ \nA. 將 AWS CloudTrail 設定為模型的日誌目的地。 \nB. 在 Amazon Bedrock 中啟用調用日誌記錄。 \nC. 將 AWS Audit Manager 設定為模型的日誌目的地。 \nD. 在 Amazon EventBridge 中設定模型調用日誌記錄。 ",
    answer: "B. 在 Amazon Bedrock 中啟用調用日誌記錄。 ",
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
    question: "一家公司需要建構自己的大型語言模型 (LLM)，僅基於公司的私人資料。 \n公司關注訓練過程的環境影響。 \n哪種類型的 Amazon EC2 執行個體在訓練 LLM 時對環境影響最小？ \nA. Amazon EC2 C 系列 \nB. Amazon EC2 G 系列 \nC. Amazon EC2 P 系列 \nD. Amazon EC2 Trn 系列 ",
    answer: "D. Amazon EC2 Trn 系列 ",
    category: "Amazon EC2",
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
    question: "一家金融機構正在使用 Amazon Bedrock 開發 AI 應用程式。 \n應用程式託管在 VPC 中。為了符合法規要求，不允許 VPC 存取任何網際網路流量。 \n哪個 AWS 服務或功能符合這些需求？ \nA. AWS PrivateLink\nB. Amazon Macie\nC. Amazon CloudFront\nD. 網際網路閘道",
    answer: "A. AWS PrivateLink",
    category: "AWS 網路服務",
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
    question: "一家公司建構了用於物件偵測的深度學習模型，並將該模型部署到生產環境。 \n當模型分析新圖像以識別物件時，這屬於哪個 AI 過程？ \nA. 訓練 \nB. 推論 \nC. 模型部署 \nD. 偏差校正 ",
    answer: "B. 推論 ",
    category: "AI 過程",
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
    question: "一家公司正在使用 Amazon SageMaker Studio 筆記本來建構和訓練 ML 模型。 \n公司將資料儲存在 Amazon S3 儲存貯體中。 \n公司需要管理從 Amazon S3 到 SageMaker Studio 筆記本的資料流。 \n哪種解決方案符合此需求？ \nA. 使用 Amazon Inspector 監控 SageMaker Studio。 \nB. 使用 Amazon Macie 監控 SageMaker Studio。 \nC. 設定 SageMaker 使用具有 S3 端點的 VPC。 \nD. 設定 SageMaker 使用 S3 Glacier Deep Archive。 ",
    answer: "C. 設定 SageMaker 使用具有 S3 端點的 VPC。 ",
    category: "Amazon SageMaker",
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
    question: "一家公司正在使用特定領域的模型。 \n公司希望避免從頭開始建立新模型。 \n公司反而希望調整預訓練的模型，為新的相關任務建立模型。 \n哪種 ML 策略符合這些需求？ \nA. 增加訓練輪數。\nB. 使用遷移學習。 \nC. 減少訓練輪數。 \nD. 使用非監督式學習。 ",
    answer: "B. 使用遷移學習。 ",
    category: "機器學習策略",
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
    question: "一家公司希望使用 AI 來保護其應用程式免受威脅。 \nAI 解決方案需要檢查 IP 位址是否來自可疑來源。 \n哪種解決方案符合這些需求？ \nA. 建構語音辨識系統。 \nB. 建立自然語言處理 (NLP) 命名實體辨識系統。 \nC. 開發異常偵測系統。 \nD. 建立詐欺預測系統。 ",
    answer: "C. 開發異常偵測系統。 ",
    category: "AI 安全",
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
    question: "一家公司希望使用大型語言模型 (LLM) 開發一個會話代理。 \n公司需要防止 LLM 被常見的提示工程技術操控以執行不當行為或暴露敏感資訊。 \n哪種行動可以降低這些風險？ \nA. 建立一個提示範本，教導 LLM 偵測攻擊模式。 \nB. 提高對 LLM 調用請求的溫度參數。 \nC. 避免使用未在 Amazon SageMaker 中列出的 LLM。 \nD. 減少對 LLM 調用的輸入符號數量。 ",
    answer: "A. 建立一個提示範本，教導 LLM 偵測攻擊模式。 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家公司正在開發一個新模型來預測特定商品的價格。 \n該模型在訓練資料集上表現良好。當公司將模型部署到生產環境時，模型的效能顯著下降。 \n公司應該如何緩解這個問題？ \nA. 減少訓練中使用的資料量。 \nB. 向模型添加超參數。 \nC. 增加訓練中使用的資料量。 \nD. 增加模型訓練時間。 ",
    answer: "C. 增加訓練中使用的資料量。 ",
    category: "機器學習",
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
    question: "一家公司希望使用 Amazon Bedrock 上的基礎模型 (FM) 建立一個聊天機器人。 \nFM 需要存取儲存在 Amazon S3 儲存貯體中的加密資料。 \n資料使用 Amazon S3 受管金鑰 (SSE-S3) 加密。 \nFM 在嘗試存取 S3 儲存貯體資料時遇到故障。 \n哪種解決方案符合這些需求？ \nA. 確保 Amazon Bedrock 假設的角色有權使用正確的加密金鑰解密資料。 \nB. 設定 S3 儲存貯體的存取權限，以允許公開存取，以便透過網際網路存取。 \nC. 使用提示工程技術告訴模型在 Amazon S3 中尋找資訊。 \nD. 確保 S3 資料不包含敏感資訊。 ",
    answer: "A. 確保 Amazon Bedrock 假設的角色有權使用正確的加密金鑰解密資料。 ",
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
    question: "一家公司有一個基礎模型 (FM)，已使用 Amazon Bedrock 客製化，用於回答客戶對產品的查詢。 \n公司希望驗證模型對新類型查詢的回應。 \n公司需要上傳一個新的資料集，Amazon Bedrock 可以用於驗證。 \n哪個 AWS 服務符合這些需求？ \nA. Amazon S3\nB. Amazon Elastic Block Store (Amazon EBS)\nC. Amazon Elastic File System (Amazon EFS)\nD. AWS Snowcone",
    answer: "A. Amazon S3 ",
    category: "AWS 儲存服務",
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
    question: "一家公司希望評估使用大型語言模型 (LLM) 產生推論的成本。 \n公司希望使用 Amazon Bedrock 建立生成式 AI 應用程式。 \n哪個因素會推動推論成本？ \nA. 消耗的符號數量 \nB. 溫度值 \nC. 用於訓練 LLM 的資料量 \nD. 總訓練時間 ",
    answer: "A. 消耗的符號數量 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家 AI 公司定期與獨立軟體供應商 (ISV) 協作評估其系統和流程。 \n公司需要在 ISV 的合規報告可用時收到電子郵件通知。 \n哪個 AWS 服務可以滿足此需求？ \nA. AWS Audit Manager \nB. AWS Artifact \nC. AWS Trusted Advisor \nD. AWS Data Exchange ",
    answer: "B. AWS Artifact ",
    category: "AWS 服務",
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
    question: "一家公司希望在 Amazon Bedrock 上使用大型語言模型 (LLM) 進行情感分析。 \n公司需要 LLM 對相同的輸入提示產生更一致的回應。 \n公司應該對推論參數進行哪種調整以滿足這些需求？ \nA. 降低溫度值 \nB. 提高溫度值 \nC. 縮短輸出符號的長度 \nD. 增加最大生成長度 ",
    answer: "A. 降低溫度值 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家公司正在實施 Amazon Titan 基礎模型 (FM)，使用 Amazon Bedrock。 \n公司需要使用公司私人資料來源的相關資料來補充模型。 \n哪種解決方案符合此需求？ \nA. 使用不同的 FM\nB. 選擇較低的溫度值\nC. 建立 Amazon Bedrock 知識庫\nD. 啟用模型調用日誌記錄",
    answer: "C. 建立 Amazon Bedrock 知識庫",
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
    question: "一家公司希望開發一個教育遊戲，讓使用者回答如下問題：「罐子裡有六個紅色、四個綠色和三個黃色彈珠。從罐子裡選出一個綠色彈珠的機率是多少？」 \n哪種解決方案以最少的操作開銷滿足這些需求？ \nA. 使用監督式學習建立迴歸模型，該模型將預測機率。 \nB. 使用強化學習訓練模型以返回機率。 \nC. 使用程式碼透過簡單的規則和計算來計算機率。 \nD. 使用非監督式學習建立估計機率密度的模型。 ",
    answer: "C. 使用程式碼透過簡單的規則和計算來計算機率。 ",
    category: "AI 應用程式開發",
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
    question: "Amazon SageMaker Clarify 提供了什麼功能？ \nA. 整合檢索增強生成 (RAG) 工作流程\nB. 監控生產中的 ML 模型品質\nC. 記錄 ML 模型的重要詳細資料\nD. 在資料準備期間識別潛在偏差",
    answer: "D. 在資料準備期間識別潛在偏差",
    category: "Amazon SageMaker",
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
    question: "一家公司正在建構一個 ML 模型。 \n公司收集了新資料，並透過建立相關矩陣、計算統計資料和視覺化資料來分析資料。 \n公司目前處於 ML 流程的哪個階段？ \nA. 資料前處理 \nB. 特徵工程 \nC. 探索性資料分析 \nD. 超參數調整 ",
    answer: "C. 探索性資料分析 ",
    category: "機器學習流程",
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
    question: "一家公司有一些文件，因為資料庫錯誤而缺少了一些單字。 \n公司希望建構一個 ML 模型，可以建議潛在單字來填補缺失的文字。 \n哪種類型的模型符合此需求？ \nA. 主題模型\nB. 叢集模型\nC. 規範性 ML 模型\nD. 基於 BERT 的模型",
    answer: "D. 基於 BERT 的模型",
    category: "機器學習模型",
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
    question: "一家公司正在建構一個聊天機器人以改善使用者體驗。 \n公司正在使用來自 Amazon Bedrock 的大型語言模型 (LLM) 進行意圖偵測。 \n公司希望使用少樣本學習來提高意圖偵測的準確性。 \n公司需要哪些額外資料來滿足這些需求？ \nA. 聊天機器人回應與正確使用者意圖的配對 \nB. 使用者訊息與正確聊天機器人回應的配對 \nC. 使用者訊息與正確使用者意圖的配對 \nD. 使用者意圖與正確聊天機器人回應的配對 ",
    answer: "C. 使用者訊息與正確使用者意圖的配對 ",
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
    question: "一家公司正在建立一個大型語言模型 (LLM) 問答聊天機器人。 \n公司希望減少客服中心員工回應客戶問題所需的行動數量。 \n公司應該使用哪個業務目標來評估 LLM 聊天機器人的效果？ \nA. 網站參與率 \nB. 平均通話時間 \nC. 企業社會責任 \nD. 法規遵循 ",
    answer: "B. 平均通話時間 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家公司正在對託管在 Amazon Bedrock 上的基礎模型使用少樣本提示。 \n模型目前在提示中使用了 10 個範例。模型每天調用一次，且表現良好。 \n公司希望降低每月成本。 \n哪種解決方案符合這些需求？ \nA. 透過微調客製化模型。 \nB. 減少提示中的符號數量。 \nC. 增加提示中的符號數量。 \nD. 使用佈建輸送量。 ",
    answer: "B. 減少提示中的符號數量。 ",
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
    question: "一家會計事務所希望實施一個大型語言模型 (LLM) 來自動化文件處理。 \n事務所必須負責任地進行開發和部署以避免潛在的危害。 \n事務所在開發和部署 LLM 時應該怎麼做？ \n(選擇兩項) \nA. 包含公平性指標用於模型評估。 \nB. 調整模型的溫度參數。 \nC. 修改訓練資料以緩解偏差。 \nD. 避免在訓練資料上過度擬合。 \nE. 應用提示工程技術。 ",
    answer: "A. 包含公平性指標用於模型評估, C. 修改訓練資料以緩解偏差 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家公司建構了一個圖像分類模型來預測植物葉片的疾病。 \n公司希望評估模型正確分類的圖像數量。 \n公司應該使用哪個評估指標來測量模型的效能？ \nA. R-平方分數 \nB. 準確度 \nC. 均方根誤差 (RMSE) \nD. 學習率 ",
    answer: "B. 準確度 ",
    category: "模型評估",
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
    question: "一家大型零售商每天收到數千個關於產品的客戶支援查詢。 \n客戶支援查詢需要快速處理和回應。 \n公司希望實施 Amazon Bedrock 代理。 \n使用 Amazon Bedrock 代理的關鍵優勢是什麼，可以幫助這家零售商？ \nA. 產生自訂基礎模型 (FM) 以預測客戶需求\nB. 自動化重複性任務並編排複雜的工作流程\nC. 自動調用多個基礎模型 (FM) 並整合結果\nD. 根據預定義的準則和指標選擇基礎模型 (FM)",
    answer: "B. 自動化重複性任務並編排複雜的工作流程",
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
    question: "一家公司正在訓練一個基礎模型 (FM)。 \n公司希望將模型的準確度提高到特定的可接受水平。 \n哪種解決方案符合這些需求？ \nA. 降低批次大小。 \nB. 增加訓練輪數。 \nC. 減少訓練輪數。 \nD. 提高溫度參數。 ",
    answer: "B. 增加訓練輪數。 ",
    category: "基礎模型 (FM)",
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
    question: "一家公司建構了一個聊天機器人，可以回應自然語言問題並提供圖像。 \n公司希望確保聊天機器人不會返回不適當或不需要的圖像。 \n哪種解決方案符合這些需求？ \nA. 實施內容審核 API。\nB. 使用一般公開資料集重新訓練模型。 \nC. 執行模型驗證。 \nD. 自動化使用者回饋整合。",
    answer: "A. 實施內容審核 API。",
    category: "AI 安全",
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
    question: "一家律師事務所希望使用大型語言模型 (LLM) 建立一個 AI 應用程式。 \n應用程式將讀取法律文件並從文件中提取關鍵點。 \n哪種解決方案符合這些需求？ \nA. 建立自動命名實體辨識系統。\nB. 建立推薦引擎。\nC. 開發摘要聊天機器人。 \nD. 開發多語言翻譯系統。",
    answer: "C. 開發摘要聊天機器人。 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家公司希望根據基因特徵將人類基因分為 20 個類別。 \n公司需要一個 ML 演算法來記錄模型的內部機制如何影響輸出。 \n哪種 ML 演算法符合這些需求？ \nA. 決策樹 \nB. 線性迴歸 \nC. 邏輯迴歸 \nD. 類神經網路 ",
    answer: "A. 決策樹 ",
    category: "機器學習演算法",
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
    question: "一家公司希望使用 Amazon Bedrock 和上傳至 Amazon S3 的客戶資料來開發 LLM 應用程式。 \n公司的安全政策規定每個團隊只能存取該團隊自己客戶的資料。 \n哪種解決方案符合這些需求？ \nA. 為每個團隊建立一個 Amazon Bedrock 自訂服務角色，該角色只能存取該團隊的客戶資料。 \nB. 建立一個具有 Amazon S3 存取權限的自訂服務角色。  要求團隊在每個 Amazon Bedrock 請求中指定客戶名稱。 \nC. 在 Amazon S3 中修改個人資料。  更新 S3 儲存貯體政策以允許團隊存取客戶資料。 \nD. 建立一個具有完整 Amazon S3 存取權限的 Amazon Bedrock 角色。  為每個團隊建立 IAM 角色，這些角色只能存取每個團隊的客戶資料夾。 ",
    answer: "A. 為每個團隊建立一個 Amazon Bedrock 自訂服務角色，該角色只能存取該團隊的客戶資料。 ",
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
    question: "一家公司希望在 Amazon Bedrock 上使用大型語言模型 (LLM) 進行情感分析。 \n公司希望了解一個提示中可以包含多少資訊。 \n哪個考量會影響公司的決策？ \nA. 溫度\nB. 上下文視窗\nC. 批次大小\nD. 模型大小",
    answer: "B. 上下文視窗 ",
    category: "大型語言模型 (LLM)",
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
    question: "一位 AI 實務者建構了一個深度學習模型來分類圖像中的材料類型。 \nAI 實務者現在希望測量模型的效能。 \n哪個指標將幫助 AI 實務者評估模型的效能？ \nA. 混淆矩陣 \nB. 相關矩陣 \nC. R2 分數 \nD. 均方誤差 (MSE) ",
    answer: "A. 混淆矩陣 ",
    category: "深度學習",
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
    question: "一位 AI 實務者正在建構一個模型來生成不同職業人員的圖像。 \nAI 實務者發現輸入資料存在偏差，並且特定屬性會影響圖像生成並在模型中產生偏差。 \n哪種技術可以解決這個問題？ \nA. 對不平衡類別進行資料增強\nB. 模型的類別分佈監控\nC. 檢索增強生成 (RAG)\nD. 圖像浮水印偵測",
    answer: "A. 對不平衡類別進行資料增強",
    category: "AI 偏見",
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
    question: "一家公司正在建構一個 ML 模型來分析封存資料。 \n公司必須對數 GB 大小的資料集執行推論。 \n公司不需要立即存取模型預測。 \n哪個 Amazon SageMaker 推論選項符合這些需求？ \nA. 批次轉換\nB. 即時推論\nC. 無伺服器推論\nD. 非同步推論",
    answer: "A. 批次轉換",
    category: "Amazon SageMaker",
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
    question: "一家公司需要從 Amazon Bedrock 中選擇一個模型以供內部使用。 \n公司必須識別一個能以公司員工偏好風格產生回應的模型。 \n公司應該怎麼做才能符合這些需求？ \nA. 使用內建提示資料集評估模型。 \nB. 使用人工工作團隊和自訂提示資料集評估模型。 \nC. 使用公開模型排行榜識別模型。 \nD. 嘗試模型時，在 Amazon CloudWatch 中使用模型的 InvocationLatency 執行階段指標。 ",
    answer: "B. 使用人工工作團隊和自訂提示資料集評估模型。 ",
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
    question: "一家公司正在使用生成式 AI 安全範疇矩陣來評估其解決方案的安全責任。 \n公司已根據矩陣識別了四個不同的解決方案範疇。 \n哪個解決方案範疇賦予公司對安全責任的最大所有權？ \nA. 使用具有內嵌生成式 AI 功能的第三方企業應用程式。 \nB. 使用現有的第三方生成式 AI 基礎模型 (FM) 建構應用程式。 \nC. 透過使用特定於業務的資料微調現有的第三方生成式 AI 基礎模型 (FM)。 \nD. 從頭開始使用客戶擁有的特定資料建構和訓練生成式 AI 模型。 ",
    answer: "D. 從頭開始使用客戶擁有的特定資料建構和訓練生成式 AI 模型。 ",
    category: "生成式 AI 安全",
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
    question: "一家公司在生產環境中將 Amazon SageMaker 用於其 ML 管線。 \n公司輸入資料量可達 1 GB，處理時間最長可達 1 小時。 \n公司需要接近即時的延遲。 \n哪個 SageMaker 推論選項符合這些需求？ \nA. 即時推論\nB. 無伺服器推論\nC. 非同步推論\nD. 批次轉換",
    answer: "A. 即時推論",
    category: "Amazon SageMaker",
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
    question: "一家公司希望使用語言模型為邊緣設備上的推論建立應用程式。 \n推論必須具有盡可能低的延遲。 \n哪種解決方案符合這些需求？ \nA. 在邊緣設備上部署最佳化的小型語言模型 (SLM)。\nB. 在邊緣設備上部署最佳化的大型語言模型 (LLM)。 \nC. 整合集中式小型語言模型 (SLM) API，用於與邊緣設備的非同步通訊。 \nD. 整合集中式大型語言模型 (LLM) API，用於與邊緣設備的非同步通訊。 ",
    answer: "A. 在邊緣設備上部署最佳化的小型語言模型 (SLM)。 ",
    category: "語言模型",
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
    question: "一家公司正在建構一個聯絡中心應用程式，並希望從客戶對話中獲取洞察。 \n公司希望從客戶通話的音訊中分析和提取關鍵資訊。 \n哪種解決方案符合這些需求？ \nA. 使用 Amazon Lex 建構會話式聊天機器人。 \nB. 使用 Amazon Transcribe 轉錄通話記錄。 \nC. 使用 Amazon SageMaker Model Monitor 從通話記錄中提取資訊。 \nD. 使用 Amazon Comprehend 建立分類標籤。 ",
    answer: "B. 使用 Amazon Transcribe 轉錄通話記錄。 ",
    category: "AWS AI 服務",
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
    question: "一家公司希望使用 Amazon SageMaker 建立 ML 模型。 \n公司需要在多個團隊之間共用和管理模型開發的變數。 \n哪個 SageMaker 功能符合這些需求？ \nA. Amazon SageMaker Feature Store\nB. Amazon SageMaker Data Wrangler\nC. Amazon SageMaker Clarify\nD. Amazon SageMaker Model Cards",
    answer: "A. Amazon SageMaker Feature Store",
    category: "Amazon SageMaker",
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
    question: "一家公司正在使用預訓練的大型語言模型 (LLM) 建構產品推薦聊天機器人。 \n公司需要 LLM 輸出簡短並以特定語言撰寫。 \n哪種解決方案可以使 LLM 回應品質符合公司的預期？ \nA. 調整提示。\nB. 選擇不同大小的 LLM。 \nC. 提高溫度。 \nD. 提高 Top K 值。 ",
    answer: "A. 調整提示。 ",
    category: "大型語言模型 (LLM)",
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
    question: "一家公司使用 Amazon Bedrock 的基礎模型 (FM) 進行 AI 搜尋工具。 \n公司希望透過使用公司資料微調模型，使其更準確。 \n哪種策略可以成功微調模型？ \nA. 提供帶有提示欄位和完成欄位的標記資料。 \nB. 透過建立包含多行 .csv 格式的 .txt 檔案來準備訓練資料集。 \nC. 購買 Amazon Bedrock 的佈建輸送量。 \nD. 在期刊和教科書上訓練模型。 ",
    answer: "A. 提供帶有提示欄位和完成欄位的標記資料。 ",
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
    question: "一位 AI 實務者有一個動物照片資料庫。 \nAI 實務者希望自動識別和分類照片中的動物，無需人工介入。 \n哪種策略符合這些需求？ \nA. 物件偵測\nB. 異常偵測\nC. 命名實體辨識\nD. 填補",
    answer: "A. 物件偵測",
    category: "電腦視覺",
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
    question: "一家研究公司使用 Amazon Bedrock 的基礎模型 (FM) 實施了一個聊天機器人，用於從大型研究論文資料庫中搜尋問題的答案。 \n在多次提示工程嘗試後，公司注意到由於研究論文中出現複雜的科學術語，FM 的效能不佳。 \n公司如何改善聊天機器人的效能？ \nA. 使用少樣本提示來定義 FM 如何回答問題。 \nB. 使用領域適應微調來使 FM 適應複雜的科學術語。 \nC. 變更 FM 推論參數。 \nD. 清理研究論文資料以移除複雜的科學術語。 ",
    answer: "B. 使用領域適應微調來使 FM 適應複雜的科學術語。 ",
    category: "基礎模型 (FM)",
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
    question: "一家醫療公司在 Amazon Bedrock 上部署了一個疾病偵測模型。 \n為符合隱私政策，公司希望防止模型在其回應中包含患者個人資訊。 \n公司還希望在發生政策違規時收到通知。 \n哪種解決方案符合這些需求？ \nA. 使用 Amazon Macie 掃描模型輸出中的敏感資料，並設定警示以防止潛在違規。 \nB. 設定 AWS CloudTrail 監控模型的回應，並為任何偵測到的個人資訊建立警示。 \nC. 使用 Amazon Bedrock 的護欄功能來篩選內容。設定 Amazon CloudWatch 警報以通知政策違規。 \nD. 實施 Amazon SageMaker Model Monitor 以偵測資料漂移並在模型品質下降時接收警示。 ",
    answer: "C. 使用 Amazon Bedrock 的護欄功能來篩選內容。設定 Amazon CloudWatch 警報以通知政策違規。 ",
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
    question: "一個教育提供者正在建立一個問答應用程式，該應用程式使用生成式 AI 模型來解釋複雜概念。 \n教育提供者希望根據提問者的年齡範圍自動更改模型的回應風格。 \n教育提供者將向模型提供提問使用者的年齡範圍。 \n哪種解決方案以最少的實施工作量滿足這些需求？ \nA. 透過使用代表應用程式將支援的各種年齡範圍的額外訓練資料來微調模型。 \nB. 在提示上下文中添加角色描述，指示模型針對回應應鎖定的年齡範圍。 \nC. 使用思維鏈推理來推斷適合該使用者的回應風格和複雜度。 \nD. 根據使用者的年齡總結回應文字，以便年輕使用者收到較短的回應。 ",
    answer: "B. 在提示上下文中添加角色描述，指示模型針對回應應鎖定的年齡範圍。 ",
    category: "生成式 AI",
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
    question: "一家社交媒體公司希望使用大型語言模型 (LLM) 進行內容審核。 \n公司希望評估 LLM 輸出是否對特定群體或個人存在偏見和潛在歧視。 \n公司應該使用哪個資料來源來以最少的管理工作量評估 LLM 輸出？ \nA. 使用者產生內容\nB. 審核日誌\nC. 內容審核指南\nD. 基準資料集",
    answer: "D. 基準資料集",
    category: "大型語言模型 (LLM)",
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
    question: "哪種策略可以評估圖像分類任務中使用的基礎模型 (FM) 的準確性？ \nA. 計算模型使用的資源總成本。\nB. 針對預定義的基準資料集測量模型的準確性。 \nC. 計算類神經網路中的層數。 \nD. 評估模型處理的圖像的顏色準確性。 ",
    answer: "B. 針對預定義的基準資料集測量模型的準確性。 ",
    category: "模型評估",
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
    question: "一家公司在資料庫中擁有數 TB 的資料，可用於業務分析。 \n公司希望建構一個基於 AI 的應用程式，可以從員工提供的輸入文字建構 SQL 查詢。 \n員工的技術經驗最少。 \n哪種解決方案符合這些需求？ \nA. 生成預訓練轉換器 (GPT)\nB. 殘差類神經網路\nC. 支援向量機\nD. WaveNet",
    answer: "A. 生成預訓練轉換器 (GPT)",
    category: "AI 應用程式開發",
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
    question: "哪個指標測量 AI 模型的運行效率？ \nA. 客戶滿意度分數 (CSAT)\nB. 每個訓練時期的訓練時間\nC. 平均回應時間\nD. 訓練執行個體數量",
    answer: "C. 平均回應時間",
    category: "AI 模型評估",
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
    question: "在微調基礎模型 (FM) 時持續進行預訓練有哪些優勢？ \nA. 有助於降低模型的複雜度\nB. 隨著時間推移提高模型效能\nC. 減少訓練時間需求\nD. 最佳化模型推論時間",
    answer: "B. 隨著時間推移提高模型效能",
    category: "基礎模型 (FM)",
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
    question: "一位 AI 實務者希望使用基礎模型 (FM) 設計一個搜尋應用程式。 \n搜尋應用程式必須處理包含文字和圖像的查詢。 \nAI 實務者應該使用哪種類型的 FM 來支援搜尋應用程式？ \nA. 多模態嵌入模型 \nB. 文字嵌入模型 \nC. 多模態生成模型 \nD. 圖像生成模型 ",
    answer: "A. 多模態嵌入模型 ",
    category: "基礎模型 (FM)",
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
    question: "一家公司正在使用 Amazon Bedrock 基礎模型來摘要文件以用於內部使用案例。 \n公司訓練了一個客製化模型以提高摘要品質。 \n公司必須採取哪種行動才能透過 Amazon Bedrock 使用客製化模型？ \nA. 購買客製化模型的佈建輸送量。 \nB. 將客製化模型部署在 Amazon SageMaker 端點以進行即時推論。 \nC. 向 Amazon SageMaker 模型註冊表註冊模型。 \nD. 授予 Amazon Bedrock 對客製化模型的存取權。 ",
    answer: "B. 將客製化模型部署在 Amazon SageMaker 端點以進行即時推論。 ",
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
    question: "一家公司已使用生成式 AI 建構了一個解決方案。 \n該解決方案使用大型語言模型 (LLM) 將訓練手冊從英文翻譯成其他語言。 \n公司希望透過檢查手冊的產生文字來評估解決方案的準確性。 \n哪種模型評估策略符合這些需求？ \nA. 雙語評估學徒 (BLEU)\nB. 均方根誤差 (RMSE)\nC. 回憶導向的概要評估 (ROUGE)\nD. F1 分數",
    answer: "A. 雙語評估學徒 (BLEU)",
    category: "生成式 AI",
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
    question: "公司如何在 Amazon Bedrock 上安全地使用大型語言模型 (LLM)？ \nA. 設計清晰具體的提示。設定 AWS Identity and Access Management (IAM) 角色和政策，使用最小權限存取。 \nB. 啟用 AWS Audit Manager 以進行自動模型評估工作。 \nC. 啟用 Amazon Bedrock 自動模型評估工作。 \nD. 使用 Amazon CloudWatch Logs 使模型可解釋並監控偏差。 ",
    answer: "A. 設計清晰具體的提示。設定 AWS Identity and Access Management (IAM) 角色和政策，使用最小權限存取。 ",
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
    question: "一家公司正在建立一個客服聊天機器人。 \n公司希望聊天機器人透過學習過去的互動和線上資源來改善其回應。 \n哪種 AI 學習策略提供這種自我改進能力？ \nA. 使用手動策劃的良好回應和不良回應資料集進行監督式學習。\nB. 使用強化學習，並對正面的客戶回饋給予獎勵。\nC. 使用非監督式學習來尋找類似客戶查詢的叢集。\nD. 使用持續更新的 FAQ 資料庫進行監督式學習。",
    answer: "B. 使用強化學習，並對正面的客戶回饋給予獎勵。",
    category: "AI 學習策略",
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
    question: "一家公司希望部署一個會話式聊天機器人來回答客戶問題。 \n該聊天機器人基於微調的 Amazon SageMaker JumpStart 模型。應用程式必須符合多個法規框架。 \n公司可以顯示哪些功能的合規性？ (選擇兩項) \nA. 自動擴展推論端點\nB. 威脅偵測\nC. 資料保護\nD. 成本最佳化\nE. 鬆散耦合的微服務",
    answer: "B. 威脅偵測, C. 資料保護",
    category: "Amazon SageMaker",
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
    question: "一家電子商務公司希望建構一個解決方案，以根據產品的書面客戶評論來確定客戶情緒。 \n哪些 AWS 服務符合這些需求？ (選擇兩項) \nA. Amazon Lex\nB. Amazon Comprehend\nC. Amazon Polly\nD. Amazon Bedrock\nE. Amazon Rekognition",
    answer: "B. Amazon Comprehend, D. Amazon Bedrock",
    category: "AWS AI 服務",
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
    question: "一家公司希望使用預訓練的生成式 AI 模型為其行銷活動生成內容。 \n公司需要確保生成的內容符合公司的品牌語調和訊息要求。 \n哪種解決方案符合這些需求？ \nA. 最佳化模型的架構和超參數以提高模型的整體效能。 \nB. 透過在模型架構中添加更多層來增加模型的複雜性。 \nC. 建立有效的提示，提供清晰的說明和上下文來引導模型的生成。 \nD. 選擇一個大型、多樣化的資料集來預訓練新的生成模型。 ",
    answer: "C. 建立有效的提示，提供清晰的說明和上下文來引導模型的生成。 ",
    category: "生成式 AI",
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
    question: "一位大學生在撰寫論文時複製了生成式 AI 的內容。 \n這種情境代表負責任生成式 AI 的哪個挑戰？ \nA. 毒性 \nB. 幻覺 \nC. 抄襲 \nD. 隱私 ",
    answer: "C. 抄襲 ",
    category: "負責任生成式 AI",
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
    question: "一家公司希望建立一個聊天機器人來幫助客戶。 \n聊天機器人將幫助解決技術問題，無需人工介入。公司為聊天機器人選擇了一個基礎模型 (FM)。 \n聊天機器人需要產生符合公司語調的回應。 \n哪種解決方案符合這些需求？ \nA. 為 FM 設定低符號數限制。 \nB. 使用批次推論來處理詳細回應。 \nC. 實驗並微調提示，直到 FM 產生所需的回應。 \nD. 為溫度參數定義更高的數值。 ",
    answer: "C. 實驗並微調提示，直到 FM 產生所需的回應。 ",
    category: "基礎模型 (FM)",
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
    question: "一家公司安裝了一個安全攝影機。 \n公司使用 ML 模型來評估安全攝影機的影片，以偵測潛在盜竊。 \n公司發現模型對特定族群的人標記率過高。 \n哪種類型的偏差正在影響模型輸出？ \nA. 測量偏差\nB. 採樣偏差\nC. 觀察偏差\nD. 確認偏差",
    answer: "B. 採樣偏差",
    category: "AI 偏見",
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
    question: "一家公司希望在 Amazon Bedrock 上使用大型語言模型 (LLM) 進行情感分析。 \n公司希望將文字段落的情感分類為正面或負面。 \n哪種提示工程策略符合這些需求？ \nA. 在提示中提供帶有相應正面或負面標籤的文字段落範例，然後是要分類的新文字段落。 \nB. 在提示中提供情感分析和 LLM 如何運作的詳細說明。 \nC. 提供要分類的新文字段落，不含任何額外的上下文或範例。 \nD. 提供新文字段落，並包含一些不相關任務的範例，例如文字摘要或問答。 ",
    answer: "A. 在提示中提供帶有相應正面或負面標籤的文字段落範例，然後是要分類的新文字段落。 ",
    category: "大型語言模型 (LLM)",
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
    question: "哪個 AWS 服務或功能可以幫助 AI 開發團隊在團隊的 VPC 內快速部署和使用基礎模型 (FM)？ \nA. Amazon Personalize\nB. Amazon SageMaker JumpStart\nC. PartyRock，Amazon Bedrock Playground\nD. Amazon SageMaker 端點",
    answer: "D. Amazon SageMaker 端點",
    category: "AWS 服務",
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
    question: "一家公司擁有數 PB 的來自內部來源的非結構化資料。 \n公司希望將這些資料轉換為結構化格式，以便其資料科學家可以執行機器學習 (ML) 任務。 \n哪個服務符合這些需求？ \nA. Amazon Lex\nB. Amazon Rekognition\nC. Amazon Kinesis Data Streams\nD. AWS Glue",
    answer: "D. AWS Glue",
    category: "AWS 服務",
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
    question: "一家公司每天有數千次客戶支援互動，並希望分析這些互動以識別常見問題並產生洞察。 \n哪個 AWS 服務可以滿足此需求？ \nA. Amazon Lex\nB. Amazon Comprehend\nC. Amazon Transcribe\nD. Amazon Translate",
    answer: "B. Amazon Comprehend",
    category: "AWS AI 服務",
    difficulty: "中等",
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

// 為了向後相容性和與 DatasetManager 的整合，也將資料設為 awsCardsData
window.awsCardsData = window.initialAwsCards;