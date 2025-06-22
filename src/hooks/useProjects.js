const { useState, useEffect, useCallback } = React;

// 專案管理 Hook
window.useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // 從 localStorage 載入專案
  useEffect(() => {
    try {
      const storedProjects = window.loadProjectsFromStorage();
      if (storedProjects) {
        setProjects(storedProjects);
      } else {
        // 創建默認 AWS 專案
        const defaultProject = window.createDefaultProject();
        setProjects([defaultProject]);
      }
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 儲存專案到 localStorage
  useEffect(() => {
    if (!loading) {
      window.saveProjectsToStorage(projects);
    }
  }, [projects, loading]);

  // 當選擇專案時更新卡片
  useEffect(() => {
    if (currentProject) {
      const project = projects.find(p => p.id === currentProject.id);
      if (project) {
        setCards(project.cards || []);
      }
    }
  }, [currentProject, projects]);

  // 新增卡片到當前專案
  const addCardToProject = useCallback((newCard) => {
    if (!currentProject) return false;
    
    if (!newCard.question || !newCard.answer) return false;

    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      const projectIndex = updatedProjects.findIndex(p => p.id === currentProject.id);
      if (projectIndex !== -1) {
        updatedProjects[projectIndex].cards.push({
          ...newCard,
          sm2: { ...window.INITIAL_SM2_PARAMS }
        });
      }
      return updatedProjects;
    });
    return true;
  }, [currentProject]);

  // 從當前專案刪除卡片
  const deleteCardFromProject = useCallback((cardIndex) => {
    if (!currentProject) return;

    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      const projectIndex = updatedProjects.findIndex(p => p.id === currentProject.id);
      if (projectIndex !== -1) {
        updatedProjects[projectIndex].cards.splice(cardIndex, 1);
      }
      return updatedProjects;
    });
  }, [currentProject]);

  // 更新專案中的卡片
  const updateCardInProject = useCallback((cardIndex, updatedCard) => {
    if (!currentProject) return;

    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      const projectIndex = updatedProjects.findIndex(p => p.id === currentProject.id);
      if (projectIndex !== -1) {
        updatedProjects[projectIndex].cards[cardIndex] = updatedCard;
      }
      return updatedProjects;
    });
  }, [currentProject]);

  // 更新卡片的 SM2 資料
  const updateCardSM2 = useCallback((cardIndex, newSM2) => {
    if (!currentProject) return;

    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      const projectIndex = updatedProjects.findIndex(p => p.id === currentProject.id);
      if (projectIndex !== -1) {
        const cardToUpdate = { ...updatedProjects[projectIndex].cards[cardIndex] };
        cardToUpdate.sm2 = newSM2;
        updatedProjects[projectIndex].cards[cardIndex] = cardToUpdate;
      }
      return updatedProjects;
    });
  }, [currentProject]);

  return {
    projects,
    setProjects,
    currentProject,
    setCurrentProject,
    cards,
    loading,
    addCardToProject,
    deleteCardFromProject,
    updateCardInProject,
    updateCardSM2
  };
}; 