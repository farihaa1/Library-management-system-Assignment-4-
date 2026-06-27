import { baseApi } from "../baseApi";

export const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBorrowBooks: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),

    createBorrowBook: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const {useGetBorrowBooksQuery,useCreateBorrowBookMutation} = borrowApi;
