import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: {
    name: '',
    email: '',
    avatar: '',
    plan: 'free',
    isAuthenticated: false
  },
  theme: 'light',
  notifications: [],
  dashboardData: {
    projects: [],
    analytics: {
      totalProjects: 0,
      activeProjects: 0,
      completedTasks: 0,
      teamMembers: 0
    },
    recentActivity: []
  },
  settings: {
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: 'en'
  }
};

// Action types
export const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  UPDATE_DASHBOARD: 'UPDATE_DASHBOARD',
  ADD_PROJECT: 'ADD_PROJECT',
  UPDATE_PROJECT: 'UPDATE_PROJECT',
  DELETE_PROJECT: 'DELETE_PROJECT',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  TOGGLE_THEME: 'TOGGLE_THEME'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          isAuthenticated: true
        }
      };
    
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: {
          ...initialState.user,
          isAuthenticated: false
        }
      };
    
    case ActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    
    case ActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };
    
    case ActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    
    case ActionTypes.UPDATE_DASHBOARD:
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          ...action.payload
        }
      };
    
    case ActionTypes.ADD_PROJECT:
      const newProject = {
        id: Date.now(),
        ...action.payload,
        createdAt: new Date().toISOString(),
        status: 'active'
      };
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          projects: [newProject, ...state.dashboardData.projects],
          analytics: {
            ...state.dashboardData.analytics,
            totalProjects: state.dashboardData.analytics.totalProjects + 1,
            activeProjects: state.dashboardData.analytics.activeProjects + 1
          }
        }
      };
    
    case ActionTypes.UPDATE_PROJECT:
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          projects: state.dashboardData.projects.map(p => 
            p.id === action.payload.id ? { ...p, ...action.payload } : p
          )
        }
      };
    
    case ActionTypes.DELETE_PROJECT:
      return {
        ...state,
        dashboardData: {
          ...state.dashboardData,
          projects: state.dashboardData.projects.filter(p => p.id !== action.payload),
          analytics: {
            ...state.dashboardData.analytics,
            totalProjects: state.dashboardData.analytics.totalProjects - 1
          }
        }
      };
    
    case ActionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload
        }
      };
    
    case ActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
        settings: {
          ...state.settings,
          darkMode: !state.settings.darkMode
        }
      };
    
    default:
      return state;
  }
};

// Context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('qalanyAppState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      Object.keys(parsedState).forEach(key => {
        if (key === 'user' && parsedState[key].isAuthenticated) {
          dispatch({ type: ActionTypes.LOGIN, payload: parsedState[key] });
        } else if (key === 'dashboardData') {
          dispatch({ type: ActionTypes.UPDATE_DASHBOARD, payload: parsedState[key] });
        } else if (key === 'settings') {
          dispatch({ type: ActionTypes.UPDATE_SETTINGS, payload: parsedState[key] });
        }
      });
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('qalanyAppState', JSON.stringify(state));
  }, [state]);

  // Action creators
  const actions = {
    login: (userData) => dispatch({ type: ActionTypes.LOGIN, payload: userData }),
    logout: () => dispatch({ type: ActionTypes.LOGOUT }),
    updateProfile: (data) => dispatch({ type: ActionTypes.UPDATE_PROFILE, payload: data }),
    addNotification: (notification) => dispatch({ 
      type: ActionTypes.ADD_NOTIFICATION, 
      payload: { ...notification, id: Date.now() } 
    }),
    removeNotification: (id) => dispatch({ type: ActionTypes.REMOVE_NOTIFICATION, payload: id }),
    updateDashboard: (data) => dispatch({ type: ActionTypes.UPDATE_DASHBOARD, payload: data }),
    addProject: (project) => dispatch({ type: ActionTypes.ADD_PROJECT, payload: project }),
    updateProject: (project) => dispatch({ type: ActionTypes.UPDATE_PROJECT, payload: project }),
    deleteProject: (id) => dispatch({ type: ActionTypes.DELETE_PROJECT, payload: id }),
    updateSettings: (settings) => dispatch({ type: ActionTypes.UPDATE_SETTINGS, payload: settings }),
    toggleTheme: () => dispatch({ type: ActionTypes.TOGGLE_THEME })
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};