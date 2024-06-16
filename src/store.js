//file was created at: 2024/6/14
//file is under project: easy-tax
//Author: Tianjia Chen
//E-mail: benchentravail2024@gmail.com
import {configureStore} from '@reduxjs/toolkit';
import userInputReducer from './Features/userInputSlice.ts';

export const store = configureStore({
  reducer: {
    userInput: userInputReducer,
  },
});
