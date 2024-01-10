import { configureStore } from '@reduxjs/toolkit'
import { commonApi } from '@/store/api/commonApi'
import rootReducer from '@/store/rootReducer'

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(commonApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
