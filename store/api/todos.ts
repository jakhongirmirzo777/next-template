import { commonApi } from '@/store/api/commonApi'
import { Todo } from '@/store/slices/todo'

export const todosApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], string>({
      query: (name) => `/todos?search=${name}`,
      transformResponse: (rawResult: { data: { todos: Todo[] } }) =>
        rawResult.data.todos,
      providesTags: ['Todos'],
    }),
    createTodo: builder.mutation<Todo, { text: string }>({
      query(body) {
        return {
          url: '/todo',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const { useGetTodosQuery, useCreateTodoMutation } = todosApi
