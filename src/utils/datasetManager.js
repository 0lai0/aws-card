// 資料集管理工具
window.DatasetManager = {
  // 可用的資料集
  datasets: {
    aws: {
      name: 'AWS 認證學習',
      description: 'AWS 服務相關知識',
      getData: () => {
        console.log('DatasetManager: 嘗試載入 awsCardsData');
        console.log('awsCardsData 是否存在:', !!window.awsCardsData);
        console.log('awsCardsData 長度:', window.awsCardsData ? window.awsCardsData.length : 0);
        return window.awsCardsData || [];
      }
    },
    webdev: {
      name: '網頁開發技術',
      description: '前端後端開發知識',
      getData: () => {
        console.log('DatasetManager: 嘗試載入 webDevCardsData');
        console.log('webDevCardsData 是否存在:', !!window.webDevCardsData);
        return window.webDevCardsData || [];
      }
    }
  },

  // 取得所有可用的資料集
  getAvailableDatasets: function() {
    return Object.keys(this.datasets).map(key => ({
      id: key,
      name: this.datasets[key].name,
      description: this.datasets[key].description
    }));
  },

  // 根據 ID 取得資料集
  getDataset: function(datasetId) {
    const dataset = this.datasets[datasetId];
    if (dataset) {
      const rawData = dataset.getData();
      console.log(`DatasetManager: 取得 ${datasetId} 原始資料長度:`, rawData.length);
      const initializedData = window.initializeCards(rawData);
      console.log(`DatasetManager: 初始化後 ${datasetId} 資料長度:`, initializedData.length);
      return initializedData;
    }
    return [];
  },

  // 創建基於資料集的專案
  createProjectFromDataset: function(datasetId) {
    const dataset = this.datasets[datasetId];
    if (dataset) {
      const cards = this.getDataset(datasetId);
      console.log(`DatasetManager: 為專案 ${datasetId} 創建了 ${cards.length} 張卡片`);
      return {
        id: Date.now().toString(),
        name: dataset.name,
        description: dataset.description,
        cards: cards,
        createdAt: new Date().toISOString()
      };
    }
    return null;
  },

  // 註冊新的資料集
  registerDataset: function(id, name, description, dataGetter) {
    this.datasets[id] = {
      name: name,
      description: description,
      getData: dataGetter
    };
  }
}; 