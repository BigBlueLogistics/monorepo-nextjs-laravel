'use client';
import { createContext, useContext, useReducer, useMemo, Dispatch } from 'react';
import { TMaterialUIControllerProvider } from './types';

// Material Dashboard 2 React main context
const MaterialUI = createContext([]);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = 'MaterialUIContext';

// Material Dashboard 2 React reducer
function reducer(state: any, action: { type: any; value: any }) {
  switch (action.type) {
    case 'MINI_SIDENAV': {
      return { ...state, miniSidenav: action.value };
    }
    case 'TRANSPARENT_SIDENAV': {
      return { ...state, transparentSidenav: action.value };
    }
    case 'WHITE_SIDENAV': {
      return { ...state, whiteSidenav: action.value };
    }
    case 'SIDENAV_COLOR': {
      return { ...state, sidenavColor: action.value };
    }
    case 'TRANSPARENT_NAVBAR': {
      return { ...state, transparentNavbar: action.value };
    }
    case 'FIXED_NAVBAR': {
      return { ...state, fixedNavbar: action.value };
    }
    case 'OPEN_CONFIGURATOR': {
      return { ...state, openConfigurator: action.value };
    }
    case 'DIRECTION': {
      return { ...state, direction: action.value };
    }
    case 'LAYOUT': {
      return { ...state, layout: action.value };
    }
    case 'DARKMODE': {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children }: TMaterialUIControllerProvider) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: 'info',
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: 'ltr',
    layout: 'dashboard',
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]) as never[];

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      'useMaterialUIController should be used inside the MaterialUIControllerProvider.'
    );
  }

  return context;
}

// Context module functions
const setMiniSidenav = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'MINI_SIDENAV', value });
const setTransparentSidenav = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'TRANSPARENT_SIDENAV', value });
const setWhiteSidenav = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'WHITE_SIDENAV', value });
const setSidenavColor = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'SIDENAV_COLOR', value });
const setTransparentNavbar = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'TRANSPARENT_NAVBAR', value });
const setFixedNavbar = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'FIXED_NAVBAR', value });
const setOpenConfigurator = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'OPEN_CONFIGURATOR', value });
const setDirection = (dispatch: Dispatch<any>, value: any) =>
  dispatch({ type: 'DIRECTION', value });
const setLayout = (dispatch: Dispatch<any>, value: any) => dispatch({ type: 'LAYOUT', value });
const setDarkMode = (dispatch: Dispatch<any>, value: any) => dispatch({ type: 'DARKMODE', value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
};
