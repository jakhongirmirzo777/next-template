import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: number
  text: string
}

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<Todo>) {
      state.todos = [...state.todos, action.payload]
    },
  },
})

export const { setTodo } = todoSlice.actions
export default todoSlice.reducer
