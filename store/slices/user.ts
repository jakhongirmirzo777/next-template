import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  id: number
  first_name: string
  last_name: string
}

export interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
