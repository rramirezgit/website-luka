import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './slices/demoSlice'
// import session from 'redux-persist/lib/storage/session'
// import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1'
// import persistReducer from 'redux-persist/es/persistReducer'

// const persistSessionConfig = {
//   key: 'sessionStorage',
//   storage: session,
//   stateReconciler: autoMergeLevel1,
// }

// const persistedSessionReducer = persistReducer(persistSessionConfig, demoSlice)

const store = configureStore({
  reducer: {
    demo: demoSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
