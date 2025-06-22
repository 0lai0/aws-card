// 專案管理檢視組件 - 簡約風格
window.ProjectsView = ({ 
  projects, 
  setProjects, 
  setCurrentProject, 
  setMode, 
  setFeedbackMessage 
}) => {
  
  const handleCreateProject = () => {
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    if (name.trim()) {
      const newProject = window.createProject(name, description);
      setProjects(prev => [...prev, newProject]);
      setFeedbackMessage('專案創建成功！');
      document.getElementById('projectName').value = '';
      document.getElementById('projectDescription').value = '';
    } else {
      setFeedbackMessage('請輸入專案名稱！');
    }
  };

  const handleImportProject = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const projectData = JSON.parse(e.target.result);
        const importedProject = window.processImportedProject(projectData);
        setProjects(prev => [...prev, importedProject]);
        setFeedbackMessage(`成功匯入專案 "${projectData.name}" (${importedProject.cards.length} 張卡片)`);
      } catch (error) {
        console.error('匯入失敗:', error);
        setFeedbackMessage(`匯入失敗: ${error.message}`);
      }
    };
    reader.readAsText(file);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('您確定要刪除這個專案嗎？此操作不可逆！')) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
      setFeedbackMessage('專案已刪除。');
    }
  };

  const handleExportProject = (project) => {
    window.exportProjectJson(project);
    setFeedbackMessage(`專案 "${project.name}" 已匯出。`);
  };

  return React.createElement('div', {
    className: "max-w-6xl mx-auto px-4"
  }, [
    // 簡約主標題
    React.createElement('div', {
      className: "text-center mb-12",
      key: "header"
    }, [
      React.createElement('h1', {
        className: "title",
        key: "main-title"
      }, '📚 卡片式學習'),
      React.createElement('p', {
        className: "subtitle",
        key: "subtitle"
      }, '輕鬆創建和管理您的學習專案')
    ]),
    
    // 創建新專案卡片
    React.createElement('div', {
      className: "card p-8 mb-8",
      key: "create-project"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-6",
        key: "create-header"
      }, [
        React.createElement('span', {
          className: "text-3xl mr-3",
          key: "create-icon"
        }, '✨'),
        React.createElement('h2', {
          className: "text-2xl font-bold text-gray-900",
          key: "create-title"
        }, '創建新專案')
      ]),
      React.createElement('div', {
        className: "flex flex-col lg:flex-row gap-4",
        key: "create-form"
      }, [
        React.createElement('input', {
          type: "text",
          id: "projectName",
          placeholder: "輸入專案名稱...",
          className: "input flex-1",
          key: "name-input"
        }),
        React.createElement('input', {
          type: "text",
          id: "projectDescription",
          placeholder: "專案描述（可選）",
          className: "input flex-1",
          key: "desc-input"
        }),
        React.createElement('button', {
          onClick: handleCreateProject,
          className: "btn btn-primary",
          key: "create-btn"
        }, [
          React.createElement('span', {
            key: "create-icon"
          }, '🚀'),
          '創建'
        ])
      ])
    ]),

    // 匯入專案卡片
    React.createElement('div', {
      className: "card p-8 mb-8",
      key: "import-project"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-6",
        key: "import-header"
      }, [
        React.createElement('span', {
          className: "text-3xl mr-3",
          key: "import-icon"
        }, '📥'),
        React.createElement('h2', {
          className: "text-2xl font-bold text-gray-900",
          key: "import-title"
        }, '匯入專案')
      ]),
      React.createElement('label', {
        htmlFor: "project-import",
        className: "btn btn-success cursor-pointer",
        key: "import-label"
      }, [
        React.createElement('span', {
          key: "upload-icon"
        }, '📁'),
        '選擇 JSON 檔案',
        React.createElement('input', {
          id: "project-import",
          type: "file",
          accept: ".json",
          onChange: handleImportProject,
          className: "hidden",
          key: "import-input"
        })
      ])
    ]),

    // 專案列表
    React.createElement('div', {
      className: "card p-8",
      key: "project-list"
    }, [
      React.createElement('div', {
        className: "flex items-center mb-8",
        key: "list-header"
      }, [
        React.createElement('span', {
          className: "text-3xl mr-3",
          key: "list-icon"
        }, '📚'),
        React.createElement('h2', {
          className: "text-2xl font-bold text-gray-900",
          key: "list-title"
        }, `我的專案 (${projects.length})`)
      ]),
      projects.length > 0 ? React.createElement('div', {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",
        key: "projects-grid"
      }, projects.map((project) => 
        React.createElement('div', {
          key: project.id,
          className: "card p-6 hover:scale-105 transition-transform duration-200"
        }, [
          React.createElement('h3', {
            className: "text-xl font-bold text-gray-900 mb-3",
            key: "project-name"
          }, project.name),
          React.createElement('p', {
            className: "text-gray-600 text-sm mb-4",
            key: "project-desc"
          }, project.description || '沒有描述'),
          React.createElement('div', {
            className: "bg-gray-50 rounded-lg p-3 mb-4",
            key: "project-info"
          }, [
            React.createElement('p', {
              className: "text-sm font-semibold text-gray-700",
              key: "cards-count"
            }, `📖 ${project.cards.length} 張卡片`),
            React.createElement('p', {
              className: "text-xs text-gray-500 mt-1",
              key: "created-date"
            }, `📅 ${new Date(project.createdAt).toLocaleDateString()}`)
          ]),
          React.createElement('div', {
            className: "flex flex-wrap gap-2",
            key: "project-actions"
          }, [
            React.createElement('button', {
              onClick: () => {
                setCurrentProject(project);
                setMode('learn');
              },
              className: "btn btn-primary text-sm flex-1",
              key: "learn-btn"
            }, [
              React.createElement('span', { key: "icon" }, '🎯'),
              '學習'
            ]),
            React.createElement('button', {
              onClick: () => {
                setCurrentProject(project);
                setMode('manage');
              },
              className: "btn btn-success text-sm flex-1",
              key: "manage-btn"
            }, [
              React.createElement('span', { key: "icon" }, '⚙️'),
              '管理'
            ]),
            React.createElement('button', {
              onClick: () => handleExportProject(project),
              className: "btn btn-warning text-sm flex-1",
              key: "export-btn"
            }, [
              React.createElement('span', { key: "icon" }, '💾'),
              '匯出'
            ]),
            React.createElement('button', {
              onClick: () => handleDeleteProject(project.id),
              className: "btn btn-danger text-sm flex-1",
              key: "delete-btn"
            }, [
              React.createElement('span', { key: "icon" }, '🗑️'),
              '刪除'
            ])
          ])
        ])
      )) : React.createElement('div', {
        className: "text-center py-12",
        key: "no-projects"
      }, [
        React.createElement('div', {
          className: "text-6xl mb-4",
          key: "empty-icon"
        }, '📚'),
        React.createElement('p', {
          className: "text-xl font-bold text-gray-600 mb-2",
          key: "empty-title"
        }, '還沒有專案'),
        React.createElement('p', {
          className: "text-gray-500",
          key: "empty-desc"
        }, '創建您的第一個專案，開始學習之旅吧！')
      ])
    ])
  ]);
}; 