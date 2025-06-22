const { useState, useEffect } = React;

// 卡片列表項目組件 - 簡約風格
window.CardListItem = ({ 
  card, 
  index, 
  isEditing, 
  editCard, 
  onStartEdit, 
  onSaveEdit, 
  onCancelEdit, 
  onDelete,
  onEditChange 
}) => {

  if (isEditing) {
    return React.createElement('div', {
      className: "bg-gray-50 border border-gray-200 rounded-lg p-6",
      key: `edit-${index}`
    }, [
      React.createElement('div', {
        className: "space-y-4",
        key: "edit-form"
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
              onChange: (e) => onEditChange({...editCard, question: e.target.value}),
              className: "input textarea text-sm",
              rows: 3,
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
              onChange: (e) => onEditChange({...editCard, answer: e.target.value}),
              className: "input textarea text-sm",
              rows: 3,
              key: "edit-answer-input"
            })
          ])
        ]),
        React.createElement('div', {
          className: "flex gap-3 justify-end pt-2",
          key: "edit-actions"
        }, [
          React.createElement('button', {
            onClick: onSaveEdit,
            className: "btn btn-success text-sm",
            key: "save-btn"
          }, [
            React.createElement('span', { className: "mr-1", key: "save-icon" }, '💾'),
            '儲存'
          ]),
          React.createElement('button', {
            onClick: onCancelEdit,
            className: "btn btn-secondary text-sm",
            key: "cancel-btn"
          }, [
            React.createElement('span', { className: "mr-1", key: "cancel-icon" }, '❌'),
            '取消'
          ])
        ])
      ])
    ]);
  }

  return React.createElement('div', {
    className: "bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200",
    key: `view-${index}`
  }, [
    React.createElement('div', {
      className: "space-y-4",
      key: "card-content"
    }, [
      React.createElement('div', {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        key: "card-display"
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
            className: "text-gray-800 leading-relaxed",
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
            className: "text-gray-800 leading-relaxed",
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
          }, `簡化因子: ${card.easiness?.toFixed(2) || '2.50'}`),
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
          onClick: () => onStartEdit(index, card),
          className: "btn btn-primary text-sm",
          key: "edit-btn"
        }, [
          React.createElement('span', { className: "mr-1", key: "edit-icon" }, '✏️'),
          '編輯'
        ]),
        React.createElement('button', {
          onClick: () => onDelete(index),
          className: "btn btn-danger text-sm",
          key: "delete-btn"
        }, [
          React.createElement('span', { className: "mr-1", key: "delete-icon" }, '🗑️'),
          '刪除'
        ])
      ])
    ])
  ]);
}; 