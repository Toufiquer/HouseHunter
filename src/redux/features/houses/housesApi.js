/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const housesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getHouses: builder.query({
      query: () => `/houses`,
    }),
    getHouse: builder.query({
      query: (email) => `/house/${email}`,
    }),
    updateHouse: builder.mutation({
      query: ({ id, data }) => ({
        url: `/houses/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getHouses", undefined, (draft) => {
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
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    deleteHouse: builder.mutation({
      query: (id) => ({
        url: `/houses/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getHouses", undefined, (draft) => {
            const index = draft.data.findIndex((i) => i._id === arg);
            draft.data.splice(index, 1);
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
    addHouse: builder.mutation({
      query: (data) => ({
        url: `/houses`,
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
              apiSlice.util.updateQueryData("getHouses", undefined, (draft) => {
                draft.data.push(query.data);
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
  useGetHousesQuery,
  useGetHouseQuery,
  useUpdateHouseMutation,
  useDeleteHouseMutation,
  useAddHouseMutation,
  useAddLogInMutation,
} = housesApi;
