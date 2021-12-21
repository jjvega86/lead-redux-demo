import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const swapiApi = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "swapi",
    baseUrl: "https://swapi.dev/api/",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => "people/",
      transformResponse: (response, meta, args) => response.results,
    }),
    getSingleCharacter: builder.query({
      query: (characterId) => `people/${characterId}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetSingleCharacterQuery } = swapiApi;
