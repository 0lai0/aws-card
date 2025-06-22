// 創建新專案
window.createProject = (name, description) => {
  return {
    id: Date.now().toString(),
    name: name || '新專案',
    description: description || '',
    cards: [],
    createdAt: new Date().toISOString()
  };
};

// 創建默認 AWS 專案（向後相容性）
window.createDefaultProject = () => {
  console.log('createDefaultProject: 開始創建預設專案');
  
  // 檢查 DatasetManager 是否可用
  if (!window.DatasetManager) {
    console.error('createDefaultProject: DatasetManager 未載入');
    return null;
  }
  
  try {
    const project = window.DatasetManager.createProjectFromDataset('aws');
    console.log('createDefaultProject: 成功創建專案，卡片數量:', project?.cards?.length || 0);
    return project;
  } catch (error) {
    console.error('createDefaultProject: 創建專案失敗:', error);
    
    // 回退方案：直接使用 awsCardsData
    if (window.awsCardsData && window.awsCardsData.length > 0) {
      console.log('createDefaultProject: 使用回退方案，直接載入 awsCardsData');
      return {
        id: Date.now().toString(),
        name: 'AWS 認證學習',
        description: 'AWS 服務相關知識',
        cards: window.initializeCards(window.awsCardsData),
        createdAt: new Date().toISOString()
      };
    }
    
    return null;
  }
};

// 創建基於資料集的專案
window.createProjectFromDataset = (datasetId) => {
  return window.DatasetManager.createProjectFromDataset(datasetId);
};

// 取得可用的資料集模板
window.getAvailableDatasets = () => {
  return window.DatasetManager.getAvailableDatasets();
};

// 匯出專案 JSON
window.exportProjectJson = (project) => {
  const exportData = {
    name: project.name,
    description: project.description,
    cards: project.cards,
    exportedAt: new Date().toISOString()
  };

  const jsonContent = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${project.name}_flashcards.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// 驗證匯入的專案 JSON
window.validateProjectJson = (projectData) => {
  if (!projectData.name || !Array.isArray(projectData.cards)) {
    throw new Error('無效的專案 JSON 格式');
  }
  return true;
};

// 處理匯入的專案
window.processImportedProject = (projectData) => {
  window.validateProjectJson(projectData);
  
  // 確保每張卡片都有 SM2 參數
  const initializedCards = projectData.cards.map(card => ({
    ...card,
    sm2: card.sm2 || { ...window.INITIAL_SM2_PARAMS }
  }));

  return {
    id: Date.now().toString(),
    name: projectData.name,
    description: projectData.description || '',
    cards: initializedCards,
    createdAt: new Date().toISOString()
  };
};

// 從 localStorage 載入專案
window.loadProjectsFromStorage = () => {
  try {
    const storedProjects = localStorage.getItem('flashcard_projects');
    return storedProjects ? JSON.parse(storedProjects) : null;
  } catch (error) {
    console.error("Failed to load projects from localStorage:", error);
    return null;
  }
};

// 儲存專案到 localStorage
window.saveProjectsToStorage = (projects) => {
  try {
    localStorage.setItem('flashcard_projects', JSON.stringify(projects));
    return true;
  } catch (error) {
    console.error("Failed to save projects to localStorage:", error);
    return false;
  }
}; 