// 導航組件 - 簡約風格
window.Navigation = ({ mode, setMode, currentProject, setCurrentProject }) => {
  
  const navItems = [
    { 
      id: 'projects', 
      label: '專案管理', 
      icon: '🏠',
      color: 'btn-primary'
    },
    { 
      id: 'learn', 
      label: '學習模式', 
      icon: '🧠',
      color: 'btn-success',
      disabled: !currentProject
    },
    { 
      id: 'manage', 
      label: '題庫管理', 
      icon: '⚙️',
      color: 'btn-warning',
      disabled: !currentProject
    },
    { 
      id: 'stats', 
      label: '學習統計', 
      icon: '📊',
      color: 'btn-secondary',
      disabled: !currentProject
    }
  ];

  return React.createElement('nav', {
    className: "nav"
  }, [
    React.createElement('div', {
      className: "flex flex-col sm:flex-row items-center justify-between gap-4",
      key: "nav-container"
    }, [
      // 當前專案資訊
      currentProject && React.createElement('div', {
        className: "flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2",
        key: "current-project"
      }, [
        React.createElement('span', {
          className: "text-xl mr-3",
          key: "project-icon"
        }, '📚'),
        React.createElement('div', {
          className: "text-left",
          key: "project-info"
        }, [
          React.createElement('p', {
            className: "font-semibold text-xs text-gray-500 uppercase tracking-wide",
            key: "project-label"
          }, '當前專案'),
          React.createElement('p', {
            className: "font-bold text-gray-800",
            key: "project-name"
          }, currentProject.name)
        ]),
        React.createElement('button', {
          onClick: () => {
            setCurrentProject(null);
            setMode('projects');
          },
          className: "ml-4 text-gray-400 hover:text-gray-600 font-bold text-lg transition-colors",
          title: "返回專案選擇",
          key: "close-project"
        }, '✕')
      ]),

      // 導航按鈕
      React.createElement('div', {
        className: "flex flex-wrap gap-2 justify-center",
        key: "nav-buttons"
      }, navItems.map(item => 
        React.createElement('button', {
          key: item.id,
          onClick: () => !item.disabled && setMode(item.id),
          className: `btn ${item.color} text-sm ${
            mode === item.id 
              ? 'ring-2 ring-blue-500 ring-offset-2' 
              : ''
          } ${
            item.disabled 
              ? 'opacity-50 cursor-not-allowed' 
              : ''
          }`,
          disabled: item.disabled
        }, [
          React.createElement('span', {
            className: "mr-2",
            key: "nav-icon"
          }, item.icon),
          React.createElement('span', {
            key: "nav-label"
          }, item.label)
        ])
      ))
    ])
  ]);
}; 