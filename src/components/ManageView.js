// 題庫管理檢視組件 - 簡約風格
window.ManageView = ({ 
  cards, 
  addCardToProject, 
  updateCardInProject, 
  deleteCardFromProject, 
  setFeedbackMessage 
}) => {
  const [newCard, setNewCard] = React.useState({ question: '', answer: '' });
  const [editingCard, setEditingCard] = React.useState(null);
  const [editCard, setEditCard] = React.useState({ question: '', answer: '' });
  const [searchTerm, setSearchTerm] = React.useState('');

  // 篩選卡片
  const filteredCards = cards.filter(card => 
    card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCard = () => {
    if (newCard.question.trim() && newCard.answer.trim()) {
      addCardToProject(newCard);
      setNewCard({ question: '', answer: '' });
    } else {
      setFeedbackMessage('請填寫完整的問題和答案！');
    }
  };

  const handleSaveEdit = () => {
    if (editCard.question.trim() && editCard.answer.trim()) {
      updateCardInProject(editingCard, editCard);
      setEditingCard(null);
      setEditCard({ question: '', answer: '' });
    } else {
      setFeedbackMessage('請填寫完整的問題和答案！');
    }
  };

  const handleStartEdit = (index, card) => {
    setEditingCard(index);
    setEditCard({ question: card.question, answer: card.answer });
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
    setEditCard({ question: '', answer: '' });
  };

  return React.createElement('div', {
    className: "max-w-6xl mx-auto px-4"
  }, [
    // 主標題
    React.createElement('div', {
      className: "text-center mb-12",
      key: "header"
    }, [
      React.createElement('h1', {
        className: "title",
        key: "title"
      }, '⚙️ 題庫管理'),
      React.createElement('p', {
        className: "subtitle",
        key: "subtitle"
      }, '創建和管理您的學習卡片')
    ]),

    // 新增卡片區域
    React.createElement('div', {
      className: "card p-8 mb-8",
      key: "add-card-section"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-6",
        key: "add-header"
      }, [
        React.createElement('span', {
          className: "text-3xl mr-3",
          key: "add-icon"
        }, '✨'),
        React.createElement('h2', {
          className: "text-2xl font-bold text-gray-900",
          key: "add-title"
        }, '新增卡片')
      ]),
      React.createElement('div', {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        key: "add-form"
      }, [
        React.createElement('div', {
          className: "space-y-4",
          key: "question-section"
        }, [
          React.createElement('label', {
            className: "block text-sm font-semibold text-gray-700 mb-2",
            key: "question-label"
          }, '❓ 問題'),
          React.createElement('textarea', {
            value: newCard.question,
            onChange: (e) => setNewCard({...newCard, question: e.target.value}),
            placeholder: "輸入問題...",
            className: "input textarea",
            key: "question-input"
          })
        ]),
        React.createElement('div', {
          className: "space-y-4",
          key: "answer-section"
        }, [
          React.createElement('label', {
            className: "block text-sm font-semibold text-gray-700 mb-2",
            key: "answer-label"
          }, '💡 答案'),
          React.createElement('textarea', {
            value: newCard.answer,
            onChange: (e) => setNewCard({...newCard, answer: e.target.value}),
            placeholder: "輸入答案...",
            className: "input textarea",
            key: "answer-input"
          })
        ])
      ]),
      React.createElement('div', {
        className: "mt-6 text-center",
        key: "add-button-section"
      }, 
        React.createElement('button', {
          onClick: handleAddCard,
          className: "btn btn-success",
          key: "add-btn"
        }, [
          React.createElement('span', {
            key: "add-btn-icon"
          }, '🚀'),
          '新增卡片'
        ])
      )
    ]),

    // 搜尋區域
    React.createElement('div', {
      className: "card p-6 mb-8",
      key: "search-section"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-4",
        key: "search-header"
      }, [
        React.createElement('span', {
          className: "text-2xl mr-3",
          key: "search-icon"
        }, '🔍'),
        React.createElement('h3', {
          className: "text-lg font-bold text-gray-800",
          key: "search-title"
        }, '搜尋卡片')
      ]),
      React.createElement('input', {
        type: "text",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        placeholder: "搜尋問題或答案...",
        className: "input",
        key: "search-input"
      }),
      React.createElement('p', {
        className: "text-sm text-gray-600 mt-2",
        key: "search-result"
      }, `找到 ${filteredCards.length} 張卡片`)
    ]),

    // 卡片列表
    React.createElement('div', {
      className: "card p-8",
      key: "cards-list-section"
    }, [
      React.createElement('div', {
        className: "flex items-center justify-between mb-6",
        key: "list-header"
      }, [
        React.createElement('div', {
          className: "flex items-center",
          key: "list-title-section"
        }, [
          React.createElement('span', {
            className: "text-3xl mr-3",
            key: "list-icon"
          }, '📚'),
          React.createElement('h2', {
            className: "text-2xl font-bold text-gray-900",
            key: "list-title"
          }, `卡片列表 (${filteredCards.length})`)
        ])
      ]),
      
      filteredCards.length > 0 ? React.createElement('div', {
        className: "space-y-4",
        key: "cards-grid"
      }, filteredCards.map((card, index) => 
        React.createElement('div', {
          key: index,
          className: "bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
        }, [
          editingCard === index ? React.createElement('div', {
            className: "space-y-4",
            key: "edit-mode"
          }, [
            React.createElement('div', {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
              key: "edit-inputs"
            }, [
              React.createElement('div', {
                key: "edit-question"
              }, [
                React.createElement('label', {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  key: "edit-question-label"
                }, '❓ 問題'),
                React.createElement('textarea', {
                  value: editCard.question,
                  onChange: (e) => setEditCard({...editCard, question: e.target.value}),
                  className: "input textarea text-sm",
                  key: "edit-question-input"
                })
              ]),
              React.createElement('div', {
                key: "edit-answer"
              }, [
                React.createElement('label', {
                  className: "block text-sm font-semibold text-gray-700 mb-2",
                  key: "edit-answer-label"
                }, '💡 答案'),
                React.createElement('textarea', {
                  value: editCard.answer,
                  onChange: (e) => setEditCard({...editCard, answer: e.target.value}),
                  className: "input textarea text-sm",
                  key: "edit-answer-input"
                })
              ])
            ]),
            React.createElement('div', {
              className: "flex gap-3 justify-end",
              key: "edit-actions"
            }, [
              React.createElement('button', {
                onClick: handleSaveEdit,
                className: "btn btn-success text-sm",
                key: "save-btn"
              }, [
                React.createElement('span', { key: "icon" }, '💾'),
                '儲存'
              ]),
              React.createElement('button', {
                onClick: handleCancelEdit,
                className: "btn btn-secondary text-sm",
                key: "cancel-btn"
              }, [
                React.createElement('span', { key: "icon" }, '❌'),
                '取消'
              ])
            ])
          ]) : React.createElement('div', {
            className: "space-y-4",
            key: "view-mode"
          }, [
            React.createElement('div', {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              key: "card-content"
            }, [
              React.createElement('div', {
                className: "bg-white rounded-lg p-4 border border-gray-200",
                key: "question-display"
              }, [
                React.createElement('h4', {
                  className: "font-semibold text-sm text-gray-600 mb-2 uppercase tracking-wider",
                  key: "question-header"
                }, '❓ 問題'),
                React.createElement('p', {
                  className: "text-gray-800",
                  key: "question-text"
                }, card.question)
              ]),
              React.createElement('div', {
                className: "bg-white rounded-lg p-4 border border-gray-200",
                key: "answer-display"
              }, [
                React.createElement('h4', {
                  className: "font-semibold text-sm text-gray-600 mb-2 uppercase tracking-wider",
                  key: "answer-header"
                }, '💡 答案'),
                React.createElement('p', {
                  className: "text-gray-800",
                  key: "answer-text"
                }, card.answer)
              ])
            ]),
            
            // SM2 信息顯示
            React.createElement('div', {
              className: "bg-gray-100 rounded-lg p-3 border border-gray-200",
              key: "sm2-info"
            }, [
              React.createElement('div', {
                className: "flex flex-wrap gap-4 text-xs text-gray-600",
                key: "sm2-stats"
              }, [
                React.createElement('span', {
                  key: "ef-stat"
                }, `EF: ${card.easiness?.toFixed(2) || 'N/A'}`),
                React.createElement('span', {
                  key: "rep-stat"
                }, `重複次數: ${card.repetitions || 0}`),
                React.createElement('span', {
                  key: "interval-stat"
                }, `間隔: ${card.interval || 0} 天`),
                card.nextReview && React.createElement('span', {
                  key: "next-review"
                }, `下次複習: ${new Date(card.nextReview).toLocaleDateString()}`)
              ])
            ]),

            React.createElement('div', {
              className: "flex gap-3 justify-end pt-2",
              key: "card-actions"
            }, [
              React.createElement('button', {
                onClick: () => handleStartEdit(index, card),
                className: "btn btn-primary text-sm",
                key: "edit-btn"
              }, [
                React.createElement('span', { key: "icon" }, '✏️'),
                '編輯'
              ]),
              React.createElement('button', {
                onClick: () => deleteCardFromProject(index),
                className: "btn btn-danger text-sm",
                key: "delete-btn"
              }, [
                React.createElement('span', { key: "icon" }, '🗑️'),
                '刪除'
              ])
            ])
          ])
        ])
      )) : React.createElement('div', {
        className: "text-center py-12",
        key: "no-cards"
      }, [
        React.createElement('div', {
          className: "text-6xl mb-4",
          key: "empty-icon"
        }, searchTerm ? '🔍' : '📝'),
        React.createElement('p', {
          className: "text-xl font-bold text-gray-600 mb-2",
          key: "empty-title"
        }, searchTerm ? '找不到符合的卡片' : '還沒有卡片'),
        React.createElement('p', {
          className: "text-gray-500",
          key: "empty-desc"
        }, searchTerm ? '試試其他關鍵字' : '開始新增您的第一張學習卡片吧！')
      ])
    ])
  ]);
}; 