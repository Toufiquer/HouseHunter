/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getUsers: builder.query({
      query: () => `/users`,
    }),
    getUser: builder.query({
      query: (email) => `/users/${email}`,
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getUsers", undefined, (draft) => {
            const newValue = draft.map((curr) => {
              if (curr._id === arg.id) {
                return { ...curr, ...arg.data };
              } else {
                return curr;
              }
            });
            Object.assign(draft, newValue);
          })
        );
        // update getInstructors query
        const patchResult2 = dispatch(
          apiSlice.util.updateQueryData(
            "getInstructors",
            undefined,
            (draft) => {
              draft.push(...arg.data);
              // Object.assign(draft, newValue);
            }
          )
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getUsers", undefined, (draft) => {
            const index = draft.findIndex(
              (i) => parseInt(i._id) === parseInt(arg)
            );
            draft.splice(index, 1);
          })
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    // for registration
    addUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData("getUsers", undefined, (draft) => {
                draft.push(query.data);
              })
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
    // for login
    addLogIn: builder.mutation({
      query: (data) => ({
        url: `/usersLogIn`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData("getUsers", undefined, (draft) => {
                draft.push(query.data);
              })
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
  }),
});
export const {
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useAddUserMutation,
  useAddLogInMutation,
} = usersApi;
