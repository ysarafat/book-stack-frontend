import { apiSlice } from "../api/apiSlice";
interface InputData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data: InputData) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authApi;
