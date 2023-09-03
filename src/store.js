import { configureStore } from '@reduxjs/toolkit'
import allReducers from './reducers/allReducers'

export const store = configureStore({
  reducer: allReducers,
})