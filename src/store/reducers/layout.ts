import { createAction, createReducer } from '@reduxjs/toolkit';

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

/* if (prefersDarkScheme) {
    console.log('L’utilisateur préfère le mode sombre.');
  } else {
    console.log('L’utilisateur préfère le mode clair.');
  } */

interface ILayoutState {
    themeMode: string | null;
}

const initialState:ILayoutState = {
    themeMode: localStorage.getItem('themeMode') ? localStorage.getItem('themeMode') : (prefersDarkScheme ? "dark" : "light"),

};

export const changeThemeModeValue = createAction('layout/changeThemeModeValue')

const layoutReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeThemeModeValue, (state) => {
            
            if (localStorage.getItem('themeMode')) {               
                state.themeMode= localStorage.getItem('themeMode');
            }
            state.themeMode = state.themeMode == "dark" ? "light" : "dark";
            localStorage.setItem('themeMode', state.themeMode);
        })
    });
        
export default layoutReducer;