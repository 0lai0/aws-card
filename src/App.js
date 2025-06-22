// 主應用程式 - 簡約風格
window.App = () => {
  // 狀態管理
  const [mode, setMode] = window.React.useState('projects');
  const {
    projects,
    setProjects,
    currentProject,
    setCurrentProject,
    addCardToProject,
    updateCardInProject,
    deleteCardFromProject,
    updateCardSM2
  } = window.useProjects();
  const [feedbackMessage, setFeedbackMessage] = window.React.useState('');

  // 學習相關狀態
  const {
    cardsToLearn,
    currentCardIndex,
    showAnswer,
    toggleAnswer,
    handleAnswer
  } = window.useLearning(currentProject?.cards || [], updateCardSM2);

  // 鍵盤事件處理
  window.useKeyboardEvents(mode, toggleAnswer, handleAnswer, showAnswer);

  // 回饋訊息自動清除
  window.React.useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  // 包裝 addCardToProject 添加回饋訊息
  const handleAddCard = (card) => {
    const success = addCardToProject(card);
    if (success) {
      setFeedbackMessage('卡片新增成功！');
    } else {
      setFeedbackMessage('新增卡片失敗，請檢查輸入內容！');
    }
  };

  // 包裝 updateCardInProject 添加回饋訊息
  const handleUpdateCard = (index, updatedCard) => {
    updateCardInProject(index, updatedCard);
    setFeedbackMessage('卡片更新成功！');
  };

  // 包裝 deleteCardFromProject 添加回饋訊息
  const handleDeleteCard = (index) => {
    deleteCardFromProject(index);
    setFeedbackMessage('卡片刪除成功！');
  };

  // 渲染不同模式的內容
  const renderContent = () => {
    switch (mode) {
      case 'projects':
        return window.React.createElement(window.ProjectsView, {
          projects,
          setProjects,
          setCurrentProject,
          setMode,
          setFeedbackMessage
        });
      case 'learn':
        return window.React.createElement(window.LearnView, {
          cardsToLearn,
          currentCardIndex,
          showAnswer,
          toggleAnswer,
          handleAnswer
        });
      case 'manage':
        return window.React.createElement(window.ManageView, {
          cards: currentProject?.cards || [],
          addCardToProject: handleAddCard,
          updateCardInProject: handleUpdateCard,
          deleteCardFromProject: handleDeleteCard,
          setFeedbackMessage
        });
      case 'stats':
        return window.React.createElement(window.StatsView, {
          cards: currentProject?.cards || []
        });
      default:
        return null;
    }
  };

  return window.React.createElement('div', {
    className: "min-h-screen bg-gray-50"
  }, [
    // 導航區域
    window.React.createElement('header', {
      className: "bg-white border-b border-gray-200 sticky top-0 z-50",
      key: "header"
    }, [
      window.React.createElement('div', {
        className: "max-w-7xl mx-auto px-4 py-4",
        key: "header-content"
      }, [
        window.React.createElement(window.Navigation, {
          mode,
          setMode,
          currentProject,
          setCurrentProject,
          key: "navigation"
        })
      ])
    ]),

    // 主要內容區域
    window.React.createElement('main', {
      className: "py-8",
      key: "main"
    }, 
      renderContent()
    ),

    // 回饋訊息
    feedbackMessage && window.React.createElement('div', {
      className: "fixed bottom-6 right-6 z-50",
      key: "feedback"
    }, 
      window.React.createElement('div', {
        className: "bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg border border-green-600 flex items-center max-w-sm",
        key: "feedback-message"
      }, [
        window.React.createElement('span', {
          className: "text-lg mr-2",
          key: "feedback-icon"
        }, '✅'),
        window.React.createElement('span', {
          className: "font-medium",
          key: "feedback-text"
        }, feedbackMessage)
      ])
    ),

    // 頁尾
    window.React.createElement('footer', {
      className: "bg-white border-t border-gray-200 mt-16",
      key: "footer"
    }, [
      window.React.createElement('div', {
        className: "max-w-7xl mx-auto px-4 py-8 text-center",
        key: "footer-content"
      }, [
        window.React.createElement('p', {
          className: "text-gray-500 text-sm",
          key: "footer-text"
        }, '🧠 卡片式學習系統 - 基於 SM2 演算法的間隔重複學習'),
        window.React.createElement('p', {
          className: "text-gray-400 text-xs mt-2",
          key: "footer-version"
        }, '版本 2.0 | 簡約版')
      ])
    ])
  ]);
}; 