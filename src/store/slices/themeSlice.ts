import {Theme} from '../../types/theme';
import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: Theme.LIGHT,
  reducers: {
    initTheme: (_, action) => {
      if (action.payload === Theme.DARK) return Theme.DARK;
      else return Theme.LIGHT;
    },
    toggleTheme: (state) => {
      let newState = Theme.LIGHT;
      if (state === Theme.LIGHT) newState = Theme.DARK;
      localStorage.setItem('theme', Theme.toString(newState));
      return newState;
    },
  },
});

export default themeSlice;
export const {initTheme, toggleTheme} = themeSlice.actions;
