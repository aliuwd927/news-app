import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ArticleTitle = {
  title: string;
};
type Pokemon = {
  name: string;
};

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:4000" }),
  endpoints: (builder) => ({
    getSearchKeyword: builder.query<ArticleTitle, string>({
      query: (word) => `/search/${word}`,
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: (pokemon) => `/pokemon/${pokemon}`,
    }),
  }),
});

export const { useGetSearchKeywordQuery, useGetPokemonQuery } = searchApi;

/*

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/(query will be the end point attached to this link)' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon===> (See Line 4, we define the object struct of the json file), string ===> (the keyword we will passing for our end point, see query)>({
      query: (name) => `pokemon/${name}`, ==> This line here we define the end point location. 
    }),
  }),
})


*/
