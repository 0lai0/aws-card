// 學習模式檢視組件 - 簡約風格
window.LearnView = ({ 
  cardsToLearn, 
  currentCardIndex, 
  showAnswer, 
  toggleAnswer, 
  handleAnswer,
  isRandomMode,
  toggleRandomMode,
  reshuffleCards,
  restartAllCards,
  isAllLearningCompleted
}) => {
  
  const displayCard = cardsToLearn.length > 0 ? cardsToLearn[currentCardIndex % cardsToLearn.length] : null;

  // 添加調試信息
  React.useEffect(() => {
    console.log('LearnView Debug Info:');
    console.log('cardsToLearn length:', cardsToLearn.length);
    console.log('cardsToLearn:', cardsToLearn);
    console.log('隨機模式:', isRandomMode);
    console.log('所有學習完成:', isAllLearningCompleted);
  }, [cardsToLearn, isRandomMode, isAllLearningCompleted]);

  // 如果完成所有學習，顯示完成畫面
  if (isAllLearningCompleted) {
    return React.createElement('div', {
      className: "flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4"
    }, [
      React.createElement('div', {
        className: "card max-w-2xl mx-auto p-8 text-center",
        key: "completion-card"
      }, [
        React.createElement('div', {
          className: "text-6xl mb-6",
          key: "completion-emoji"
        }, '🎉'),
        React.createElement('h2', {
          className: "text-3xl font-bold text-gray-900 mb-4",
          key: "completion-title"
        }, '恭喜完成今日學習！'),
        React.createElement('p', {
          className: "text-xl text-gray-700 mb-6",
          key: "completion-desc"
        }, '您已經完成了所有需要學習的卡片。明天會有新的復習內容等著您！'),
        React.createElement('div', {
          className: "flex flex-col gap-4",
          key: "completion-actions"
        }, [
          React.createElement('button', {
            onClick: restartAllCards,
            className: "btn btn-primary text-lg py-4 px-6",
            key: "restart-btn"
          }, [
            React.createElement('span', {
              className: "text-xl mr-2",
              key: "restart-icon"
            }, '🔄'),
            '重新開始練習所有卡片'
          ]),
          React.createElement('p', {
            className: "text-sm text-gray-500 mt-2",
            key: "restart-note"
          }, '重新練習不會影響您的學習進度和復習排程')
        ])
      ])
    ]);
  }

  if (cardsToLearn.length === 0) {
    return React.createElement('div', {
      className: "card max-w-2xl mx-auto p-8 text-center"
    }, [
      React.createElement('h2', {
        className: "text-3xl font-bold text-gray-900 mb-4",
        key: "no-cards-title"
      }, '🤔 沒有可學習的卡片'),
      React.createElement('p', {
        className: "text-xl text-gray-700 mb-2",
        key: "no-cards-1"
      }, '可能的原因：'),
      React.createElement('ul', {
        className: "text-left text-gray-600 mb-4 space-y-2",
        key: "reasons-list"
      }, [
        React.createElement('li', {
          key: "reason-1"
        }, '• 所有卡片都已完成今日的學習'),
        React.createElement('li', {
          key: "reason-2"
        }, '• 卡片的 SM2 數據結構有問題'),
        React.createElement('li', {
          key: "reason-3"
        }, '• 沒有新卡片或到期的復習卡片'),
        React.createElement('li', {
          key: "reason-4"
        }, '• 資料載入時機問題')
      ]),
      React.createElement('p', {
        className: "text-gray-600",
        key: "no-cards-2"
      }, '您可以在「題庫管理」中新增更多卡片來繼續學習。'),
      React.createElement('div', {
        className: "flex flex-col gap-3 mt-6",
        key: "debug-actions"
      }, [
        React.createElement('button', {
          onClick: () => {
            console.log('=== 詳細調試信息 ===');
            console.log('window.awsCardsData:', window.awsCardsData);
            console.log('window.initialAwsCards:', window.initialAwsCards);
            console.log('DatasetManager available:', !!window.DatasetManager);
            console.log('DatasetManager AWS dataset:', window.DatasetManager?.getDataset('aws'));
            alert('請打開開發者工具（F12）查看控制台中的詳細調試信息');
          },
          className: "btn btn-secondary",
          key: "debug-btn"
        }, '🔍 查看調試信息'),
        React.createElement('button', {
          onClick: () => {
            if (confirm('確定要清除所有專案資料並重新載入嗎？這將會重置所有學習進度！')) {
              localStorage.removeItem('flashcard_projects');
              window.location.reload();
            }
          },
          className: "btn btn-outline-danger",
          key: "reset-btn"
        }, '🔄 清除資料並重新載入'),
        React.createElement('button', {
          onClick: () => {
            const testCards = window.getCardsToLearn(window.initialAwsCards || []);
            console.log('測試 getCardsToLearn 函數結果:', testCards);
            alert(`測試結果：${testCards.length} 張可學習卡片`);
          },
          className: "btn btn-outline-primary",
          key: "test-btn"
        }, '🧪 測試卡片篩選函數')
      ])
    ]);
  }

  return React.createElement('div', {
    className: "flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4"
  }, [
    // 隨機模式控制區域
    React.createElement('div', {
      className: "mb-4 flex flex-wrap items-center justify-center gap-3",
      key: "random-controls"
    }, [
      // 隨機模式開關
      React.createElement('div', {
        className: "flex items-center gap-2",
        key: "random-toggle"
      }, [
        React.createElement('span', {
          className: "text-sm font-medium text-gray-700",
          key: "random-label"
        }, '🎲 隨機出題：'),
        React.createElement('button', {
          onClick: toggleRandomMode,
          className: `px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
            isRandomMode 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`,
          key: "random-switch"
        }, isRandomMode ? '開啟' : '關閉')
      ]),
      
      // 重新洗牌按鈕（僅在隨機模式下顯示）
      isRandomMode && React.createElement('button', {
        onClick: reshuffleCards,
        className: "btn btn-secondary text-sm px-2 py-1",
        key: "reshuffle-btn"
      }, [
        React.createElement('span', {
          className: "mr-1",
          key: "shuffle-icon"
        }, '🔀'),
        '隨機'
      ])
    ]),

    // 進度指示器
    React.createElement('div', {
      className: "mb-6 text-center",
      key: "progress-indicator"
    }, [
      React.createElement('div', {
        className: "badge primary",
        key: "progress-badge"
      }, [
        React.createElement('span', {
          className: "mr-2",
          key: "progress-label"
        }, isRandomMode ? '隨機學習進度' : '學習進度'),
        React.createElement('span', {
          className: "font-bold",
          key: "progress-text"
        }, `${currentCardIndex + 1} / ${cardsToLearn.length}`)
      ])
    ]),

    // 翻卡容器
    displayCard && React.createElement('div', {
      className: "card-flip-container w-full max-w-xl h-96 mb-8 cursor-pointer",
      onClick: toggleAnswer,
      key: "card-container"
    }, [
      React.createElement('div', {
        className: "card-inner",
        style: { transform: `rotateY(${showAnswer ? 180 : 0}deg)` }
      }, [
        React.createElement('div', {
          className: "card-front text-xl font-medium flex flex-col justify-center items-center",
          key: "card-front"
        }, [
          React.createElement('span', {
            className: "text-gray-600 text-sm mb-4 font-semibold uppercase tracking-wider",
            key: "question-label"
          }, '❓ 問題'),
          React.createElement('div', {
            className: "text-center px-4",
            key: "question-text"
          }, displayCard.question),
          React.createElement('div', {
            className: "absolute bottom-4 text-xs text-gray-500 opacity-70",
            key: "tap-hint"
          }, '點擊查看答案 ✨')
        ]),
        React.createElement('div', {
          className: "card-back text-xl font-medium flex flex-col justify-center items-center",
          key: "card-back"
        }, [
          React.createElement('span', {
            className: "text-white text-sm mb-4 font-semibold uppercase tracking-wider",
            key: "answer-label"
          }, '💡 答案'),
          React.createElement('div', {
            className: "text-center px-4",
            key: "answer-text"
          }, displayCard.answer)
        ])
      ])
    ]),

    // 學習控制按鈕
    showAnswer && React.createElement('div', {
      className: "flex flex-col sm:flex-row gap-4 w-full max-w-md",
      key: "answer-buttons"
    }, [
      React.createElement('button', {
        onClick: () => handleAnswer(false),
        className: "btn btn-danger flex-1 py-4",
        key: "forget-btn"
      }, [
        React.createElement('span', {
          className: "text-xl mr-2",
          key: "forget-icon"
        }, '🤔'),
        React.createElement('span', {
          key: "forget-text"
        }, '忘記了')
      ]),
      React.createElement('button', {
        onClick: () => handleAnswer(true),
        className: "btn btn-success flex-1 py-4",
        key: "remember-btn"
      }, [
        React.createElement('span', {
          className: "text-xl mr-2",
          key: "remember-icon"
        }, '🧠'),
        React.createElement('span', {
          key: "remember-text"
        }, '記住了')
      ])
    ]),

    // 鍵盤提示
    React.createElement('div', {
      className: "mt-6 text-center",
      key: "keyboard-hints"
    }, [
      React.createElement('div', {
        className: "bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600",
        key: "hints-container"
      }, [
        React.createElement('div', {
          className: "mb-2",
          key: "main-hints"
        }, [
          React.createElement('span', {
            className: "mr-4",
            key: "space-hint"
          }, '空白鍵: 翻卡'),
          React.createElement('span', {
            className: "mr-4",
            key: "arrow-hint"
          }, '← 忘記了'),
          React.createElement('span', {
            key: "arrow-hint-2"
          }, '→ 記住了')
        ]),
        React.createElement('div', {
          className: "text-xs text-gray-500 border-t border-gray-300 pt-2",
          key: "random-hints"
        }, [
          React.createElement('span', {
            className: "mr-4",
            key: "random-toggle-hint"
          }, 'R: 切換隨機模式'),
          React.createElement('span', {
            key: "shuffle-hint"
          }, 'S: 重新洗牌')
        ])
      ])
    ]),

    // 重新開始練習按鈕
    React.createElement('div', {
      className: "mt-8 text-center",
      key: "restart-section"
    }, [
      React.createElement('button', {
        onClick: () => {
          if (confirm('確定要重新開始練習所有卡片嗎？')) {
            restartAllCards();
          }
        },
        className: "btn btn-outline-primary text-sm px-4 py-2",
        key: "restart-all-btn"
      }, [
        React.createElement('span', {
          className: "mr-2",
          key: "restart-all-icon"
        }, '🔄'),
        '重新開始練習所有卡片'
      ]),
      React.createElement('p', {
        className: "text-xs text-gray-500 mt-2",
        key: "restart-note"
      }, '重新練習不會影響學習進度')
    ])
  ]);
}; 