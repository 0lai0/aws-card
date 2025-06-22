// 學習統計檢視組件 - 簡約風格
window.StatsView = ({ cards }) => {
  const [chartInstances, setChartInstances] = React.useState({});

  const stats = React.useMemo(() => window.calculateStats(cards), [cards]);

  React.useEffect(() => {
    const createCharts = () => {
      // 清理舊的圖表
      Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
      });

      const newInstances = {};

      // 學習進度圓餅圖
      const progressCanvas = document.getElementById('progressChart');
      if (progressCanvas) {
        newInstances.progress = window.createProgressChart(progressCanvas, stats);
      }

      // 難度分佈長條圖
      const difficultyCanvas = document.getElementById('difficultyChart');
      if (difficultyCanvas) {
        newInstances.difficulty = window.createDifficultyChart(difficultyCanvas, stats);
      }

      // 每日複習預測趨勢圖
      const trendCanvas = document.getElementById('trendChart');
      if (trendCanvas) {
        newInstances.trend = window.createTrendChart(trendCanvas, stats);
      }

      setChartInstances(newInstances);
    };

    // 延遲創建圖表，確保 DOM 已渲染
    const timer = setTimeout(createCharts, 100);
    
    return () => {
      clearTimeout(timer);
      Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
      });
    };
  }, [stats]);

  const getCompletionPercentage = () => {
    if (stats.totalCards === 0) return 0;
    return Math.round((stats.reviewedCards / stats.totalCards) * 100);
  };

  const getLearningStreak = () => {
    // 簡單的連續學習天數計算
    return Math.floor(Math.random() * 10) + 1; // 示例數據
  };

  const getNextReviewTime = () => {
    const nextCards = cards.filter(card => card.nextReview && new Date(card.nextReview) > new Date());
    if (nextCards.length === 0) return '沒有待複習卡片';
    
    const nextDate = new Date(Math.min(...nextCards.map(card => new Date(card.nextReview))));
    const now = new Date();
    const diffHours = Math.ceil((nextDate - now) / (1000 * 60 * 60));
    
    if (diffHours < 24) {
      return `${diffHours} 小時後`;
    } else {
      return `${Math.ceil(diffHours / 24)} 天後`;
    }
  };

  return React.createElement('div', {
    className: "max-w-7xl mx-auto px-4"
  }, [
    // 主標題
    React.createElement('div', {
      className: "text-center mb-12",
      key: "header"
    }, [
      React.createElement('h1', {
        className: "title",
        key: "title"
      }, '📊 學習統計'),
      React.createElement('p', {
        className: "subtitle",
        key: "subtitle"
      }, '追蹤您的學習進度和表現')
    ]),

    // 關鍵指標卡片
    React.createElement('div', {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
      key: "key-metrics"
    }, [
      React.createElement('div', {
        className: "card text-center p-6",
        key: "total-cards"
      }, [
        React.createElement('div', {
          className: "text-4xl mb-2",
          key: "total-icon"
        }, '📚'),
        React.createElement('div', {
          className: "text-3xl font-bold text-blue-600 mb-1",
          key: "total-number"
        }, stats.totalCards),
        React.createElement('div', {
          className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
          key: "total-label"
        }, '總卡片數')
      ]),
      
      React.createElement('div', {
        className: "card text-center p-6",
        key: "completion"
      }, [
        React.createElement('div', {
          className: "text-4xl mb-2",
          key: "completion-icon"
        }, '🎯'),
        React.createElement('div', {
          className: "text-3xl font-bold text-green-600 mb-1",
          key: "completion-number"
        }, `${getCompletionPercentage()}%`),
        React.createElement('div', {
          className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
          key: "completion-label"
        }, '完成度')
      ]),
      
      React.createElement('div', {
        className: "card text-center p-6",
        key: "streak"
      }, [
        React.createElement('div', {
          className: "text-4xl mb-2",
          key: "streak-icon"
        }, '🔥'),
        React.createElement('div', {
          className: "text-3xl font-bold text-orange-600 mb-1",
          key: "streak-number"
        }, getLearningStreak()),
        React.createElement('div', {
          className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
          key: "streak-label"
        }, '連續天數')
      ]),
      
      React.createElement('div', {
        className: "card text-center p-6",
        key: "next-review"
      }, [
        React.createElement('div', {
          className: "text-4xl mb-2",
          key: "next-icon"
        }, '⏰'),
        React.createElement('div', {
          className: "text-lg font-bold text-purple-600 mb-1",
          key: "next-time"
        }, getNextReviewTime()),
        React.createElement('div', {
          className: "text-sm font-semibold text-gray-600 uppercase tracking-wide",
          key: "next-label"
        }, '下次複習')
      ])
    ]),

    // 進度條
    React.createElement('div', {
      className: "card p-6 mb-8",
      key: "progress-section"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-4",
        key: "progress-header"
      }, [
        React.createElement('span', {
          className: "text-2xl mr-3",
          key: "progress-icon"
        }, '📈'),
        React.createElement('h2', {
          className: "text-xl font-bold text-gray-900",
          key: "progress-title"
        }, '整體學習進度')
      ]),
      React.createElement('div', {
        className: "bg-gray-200 rounded-full h-4 mb-2",
        key: "progress-bg"
      }, 
        React.createElement('div', {
          className: "bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-500",
          style: { width: `${getCompletionPercentage()}%` },
          key: "progress-fill"
        })
      ),
      React.createElement('p', {
        className: "text-center text-gray-600 font-semibold",
        key: "progress-text"
      }, `已學習 ${stats.reviewedCards} 張，還有 ${stats.newCards} 張待學習`)
    ]),

    // 學習建議
    React.createElement('div', {
      className: "card p-6 mb-8",
      key: "suggestions"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-4",
        key: "suggestions-header"
      }, [
        React.createElement('span', {
          className: "text-2xl mr-3",
          key: "suggestions-icon"
        }, '💡'),
        React.createElement('h2', {
          className: "text-xl font-bold text-gray-900",
          key: "suggestions-title"
        }, '學習建議')
      ]),
      React.createElement('div', {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        key: "suggestions-grid"
      }, [
        stats.newCards > 0 && React.createElement('div', {
          className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
          key: "new-cards-suggestion"
        }, [
          React.createElement('div', {
            className: "flex items-center mb-2",
            key: "new-header"
          }, [
            React.createElement('span', {
              className: "text-lg mr-2",
              key: "new-icon"
            }, '🆕'),
            React.createElement('span', {
              className: "font-semibold text-blue-800",
              key: "new-title"
            }, '新卡片學習')
          ]),
          React.createElement('p', {
            className: "text-blue-700 text-sm",
            key: "new-desc"
          }, `您有 ${stats.newCards} 張新卡片待學習，建議每天學習 5-10 張新卡片。`)
        ]),
        
        stats.reviewCards > 0 && React.createElement('div', {
          className: "bg-green-50 border border-green-200 rounded-lg p-4",
          key: "review-suggestion"
        }, [
          React.createElement('div', {
            className: "flex items-center mb-2",
            key: "review-header"
          }, [
            React.createElement('span', {
              className: "text-lg mr-2",
              key: "review-icon"
            }, '🔄'),
            React.createElement('span', {
              className: "font-semibold text-green-800",
              key: "review-title"
            }, '複習提醒')
          ]),
          React.createElement('p', {
            className: "text-green-700 text-sm",
            key: "review-desc"
          }, `您有 ${stats.reviewCards} 張卡片需要複習，建議優先完成複習。`)
        ]),
        
        React.createElement('div', {
          className: "bg-purple-50 border border-purple-200 rounded-lg p-4",
          key: "consistency-suggestion"
        }, [
          React.createElement('div', {
            className: "flex items-center mb-2",
            key: "consistency-header"
          }, [
            React.createElement('span', {
              className: "text-lg mr-2",
              key: "consistency-icon"
            }, '⚡'),
            React.createElement('span', {
              className: "font-semibold text-purple-800",
              key: "consistency-title"
            }, '學習一致性')
          ]),
          React.createElement('p', {
            className: "text-purple-700 text-sm",
            key: "consistency-desc"
          }, '保持每天 15-20 分鐘的學習時間，比一次長時間學習更有效！')
        ]),
        
        React.createElement('div', {
          className: "bg-orange-50 border border-orange-200 rounded-lg p-4",
          key: "difficulty-suggestion"
        }, [
          React.createElement('div', {
            className: "flex items-center mb-2",
            key: "difficulty-header"
          }, [
            React.createElement('span', {
              className: "text-lg mr-2",
              key: "difficulty-icon"
            }, '🎯'),
            React.createElement('span', {
              className: "font-semibold text-orange-800",
              key: "difficulty-title"
            }, '難度調整')
          ]),
          React.createElement('p', {
            className: "text-orange-700 text-sm",
            key: "difficulty-desc"
          }, stats.easyCards > stats.hardCards 
            ? '您的學習表現很好！可以嘗試增加新卡片的學習量。'
            : '建議多複習困難的卡片，並適當減少新卡片的學習量。'
          )
        ])
      ])
    ]),

    // 圖表區域
    React.createElement('div', {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",
      key: "charts-section"
    }, [
      React.createElement('div', {
        className: "card p-6",
        key: "progress-chart-card"
      }, [
        React.createElement('h3', {
          className: "text-lg font-bold text-gray-900 mb-4 text-center",
          key: "progress-chart-title"
        }, '📈 學習進度分佈'),
        React.createElement('div', {
          className: "relative h-64 flex justify-center items-center",
          key: "progress-chart-container"
        }, 
          React.createElement('canvas', {
            id: "progressChart",
            key: "progress-chart"
          })
        )
      ]),
      
      React.createElement('div', {
        className: "card p-6",
        key: "difficulty-chart-card"
      }, [
        React.createElement('h3', {
          className: "text-lg font-bold text-gray-900 mb-4 text-center",
          key: "difficulty-chart-title"
        }, '🎯 難度分佈'),
        React.createElement('div', {
          className: "relative h-64",
          key: "difficulty-chart-container"
        }, 
          React.createElement('canvas', {
            id: "difficultyChart",
            key: "difficulty-chart"
          })
        )
      ])
    ]),

    React.createElement('div', {
      className: "card p-6",
      key: "trend-chart-card"
    }, [
      React.createElement('h3', {
        className: "text-lg font-bold text-gray-900 mb-4 text-center",
        key: "trend-chart-title"
      }, '📅 未來7天複習預測'),
      React.createElement('div', {
        className: "relative h-64",
        key: "trend-chart-container"
      }, 
        React.createElement('canvas', {
          id: "trendChart",
          key: "trend-chart"
        })
      )
    ])
  ]);
}; 