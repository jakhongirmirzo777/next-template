import { combineReducers } from 'redux'
import { commonApi } from '@/store/api/commonApi'
import todoReducer from '@/store/slices/todo'

const rootReducer = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  todo: todoReducer,
})

export default rootReducer
