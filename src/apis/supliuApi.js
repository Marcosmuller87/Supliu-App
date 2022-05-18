import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://tiao.supliu.com.br/api/";
const token = "marcosmuller87@gmail.com";

const headers = {
  "Content-Type": "application/json",
  Authorization: token,
};

const request = (url) => ({
  url,
  headers: headers,
});

export const supliuApi = createApi({
  reducerPath: "album",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAlbum: builder.query({
      query: (q) => request(`album?q=${q}`),
    }),
  }),
});

export const { useGetAlbumQuery } = supliuApi;
