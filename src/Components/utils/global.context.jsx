import React, { createContext, useReducer, useEffect, useContext } from 'react';

// Estado inicial
const initialState = {
  theme: 'light', // Tema inicial
  data: [], // Datos iniciales
};

// Crear el Contexto
const AppContext = createContext();

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Componente Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Cambiar el tema
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

  // Obtener los datos de la API
  useEffect(() => {
    fetch('url-de-tu-api') // Reemplaza 'url-de-tu-api' con la URL de tu API
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data }))
      .catch(error => console.error('Error:', error));
  }, []);

  // Los valores que se pasarán al contexto
  const contextValues = {
    state,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el Contexto
export const useAppContext = () => useContext(AppContext);
