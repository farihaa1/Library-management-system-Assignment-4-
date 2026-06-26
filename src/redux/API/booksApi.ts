import { baseApi } from "../baseApi";

export const booksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getBooksById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBooksByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
