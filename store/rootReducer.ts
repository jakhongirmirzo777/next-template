import { combineReducers } from 'redux'
import { commonApi } from '@/store/api/commonApi'
import todoReducer from '@/store/slices/todo'
import userReducer from '@/store/slices/user'

const rootReducer = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  todo: todoReducer,
  user: userReducer,
})

export default rootReducer
