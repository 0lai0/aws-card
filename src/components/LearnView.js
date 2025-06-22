// 學習模式檢視組件 - 簡約風格
window.LearnView = ({ 
  cardsToLearn, 
  currentCardIndex, 
  showAnswer, 
  toggleAnswer, 
  handleAnswer 
}) => {
  
  const displayCard = cardsToLearn.length > 0 ? cardsToLearn[currentCardIndex % cardsToLearn.length] : null;

  // 添加調試信息
  React.useEffect(() => {
    console.log('LearnView Debug Info:');
    console.log('cardsToLearn length:', cardsToLearn.length);
    console.log('cardsToLearn:', cardsToLearn);
  }, [cardsToLearn]);

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
        }, '• 沒有新卡片或到期的復習卡片')
      ]),
      React.createElement('p', {
        className: "text-gray-600",
        key: "no-cards-2"
      }, '您可以在「題庫管理」中新增更多卡片來繼續學習。'),
      React.createElement('button', {
        onClick: () => {
          console.log('開啟開發者工具查看詳細的調試信息');
          alert('請打開開發者工具（F12）查看控制台中的調試信息');
        },
        className: "btn btn-secondary mt-4",
        key: "debug-btn"
      }, '🔍 查看調試信息')
    ]);
  }

  return React.createElement('div', {
    className: "flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4"
  }, [
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
        }, '學習進度'),
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
        className: "bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600",
        key: "hints-container"
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
      ])
    ])
  ]);
}; 