import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './slices/demoSlice'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1'

// const persistSessionConfig = {
//   key: 'localStorage',
//   storage: storage,
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
