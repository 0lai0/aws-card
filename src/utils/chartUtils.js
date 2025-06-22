// 渲染進度圖表 - 普普風格
window.renderProgressChart = (stats) => {
  const ctx = document.getElementById('progressChart');
  if (!ctx) return;

  const chartInstance = Chart.getChart('progressChart');
  if (chartInstance) {
    chartInstance.destroy();
  }

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['已掌握', '需複習', '待學習/其他'],
      datasets: [{
        data: [stats.mastered, stats.mistakes, stats.total - stats.mastered - stats.mistakes],
        backgroundColor: [
          '#00E676', // 普普風薄荷綠
          '#FF1744', // 普普風鮮艷粉紅  
          '#00E5FF'  // 普普風電光藍
        ],
        borderColor: [
          '#000000', // 黑色邊框
          '#000000',
          '#000000'
        ],
        borderWidth: 4,
        hoverBackgroundColor: [
          '#FFEA00', // 懸停時變成螢光黃
          '#D500F9', // 懸停時變成紫羅蘭
          '#FF5722'  // 懸停時變成橘紅色
        ],
        hoverBorderWidth: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              family: 'Arial Black, Arial, sans-serif',
              size: 14,
              weight: 'bold'
            },
            color: '#000000',
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        title: {
          display: true,
          text: '🎨 學習進度概覽',
          font: {
            family: 'Arial Black, Arial, sans-serif',
            size: 18,
            weight: '900'
          },
          color: '#1A237E',
          padding: {
            top: 10,
            bottom: 20
          }
        }
      },
      elements: {
        arc: {
          borderJoinStyle: 'round'
        }
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: 'easeOutBounce'
      }
    }
  });
};

// 創建進度圖表 - 簡約風格
window.createProgressChart = (canvas, stats) => {
  if (!canvas) return null;

  const existingChart = Chart.getChart(canvas);
  if (existingChart) {
    existingChart.destroy();
  }

  return new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: ['已掌握', '需複習', '待學習'],
      datasets: [{
        data: [stats.mastered, stats.mistakes, stats.newCards],
        backgroundColor: [
          '#10b981', // 簡約綠
          '#ef4444', // 簡約紅  
          '#3b82f6'  // 簡約藍
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            usePointStyle: true
          }
        }
      }
    }
  });
};

// 創建難度分佈圖表
window.createDifficultyChart = (canvas, stats) => {
  if (!canvas) return null;

  const existingChart = Chart.getChart(canvas);
  if (existingChart) {
    existingChart.destroy();
  }

  return new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['簡單', '困難'],
      datasets: [{
        label: '卡片數量',
        data: [stats.easyCards, stats.hardCards],
        backgroundColor: [
          '#10b981',
          '#ef4444'
        ],
        borderColor: [
          '#059669',
          '#dc2626'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
};

// 創建趨勢圖表
window.createTrendChart = (canvas, stats) => {
  if (!canvas) return null;

  const existingChart = Chart.getChart(canvas);
  if (existingChart) {
    existingChart.destroy();
  }

  // 生成未來7天的複習預測數據
  const labels = [];
  const data = [];
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    labels.push(date.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' }));
    // 簡單的預測算法：基於現有卡片數量的隨機分佈
    data.push(Math.floor(Math.random() * Math.max(1, stats.totalCards / 7)) + 1);
  }

  return new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '預計複習卡片數',
        data: data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}; 