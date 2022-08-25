import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// I guess this is suppose to define the return type, but that was not working
// type ArticleSearchKeyword = {
//   length: number,
//   tags: string[]
// };

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getSearchKeyword: builder.query<
      { apiOne: string[]; apiTwo: string[]; apiThree: string[] },
      string
    >({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const testApiOne = await fetchWithBQ({
          url: "/",
          params: { url: `https://www.rawstory.com/search/?q=${_arg}` },
        });
        const testApiTwo = await fetchWithBQ({
          url: "/",
          params: {
            url: `https://www.newsweek.com/search/site/?q=${_arg}&op=Search&form_build_id=form-fZ682WsdOVy0CvQPbIUL2T6In25EQtbU6DClgu3ttr8&form_token=NjTiMzKKqA3lZiZaca71FcNN-AlbGkwHKY6-BFpKd3U&form_id=search_block_form`,
          },
        });
        const testApiThree = await fetchWithBQ({
          url: "/",
          params: {
            url: `https://www.nationalreview.com/search/?s=${_arg}`,
          },
        });
        return {
          data: {
            apiOne: testApiOne.data as string[],
            apiTwo: testApiTwo.data as string[],
            apiThree: testApiThree.data as string[],
          },
        };
      },
    }),
  }),
});

// use_Query --> _ is filled in by our endpoint, see getSearchKeyword
// this then becomes useGetSearchKeywordQuery ( see below )
export const { useGetSearchKeywordQuery } = searchApi;

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




creekburn: The query portion of the url, is the stuff after the `?`. 
          In express, that will be `res.query`. In this example, `res.query.q = 'jwst'`

creekburn: Looks like if you change the `baseQuery`, then it won't send the information to your server any more.

creekburn: A large part of express is to give a simple interface to the parts of an HTTP request/response. 
          Learning all the parts will help you know what to look for.


https://stackblitz.com/edit/vitejs-vite-sebhmo?file=src%2Fservices%2Fsearch.ts,src%2Fstore.ts,src%2Fcomponents%2FSearchWithFetch.tsx,src%2Fcomponents%2FSearchWithRTK.tsx,src%2Fcomponents%2FSearchShell.tsx&terminal=dev

*/

/**
 * If we ever need to revert back , for fucking up hard.
 * 
 * import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// I guess this is suppose to define the return type, but that was not working
// type ArticleSearchKeyword = {
//   length: number,
//   tags: string[]
// };

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }), //add the bbc website here
  endpoints: (builder) => ({
    getSearchKeyword: builder.query<string[], string>({
      query: (word: string) => ({
        url: "/",
        params: { url: `https://hn.algolia.com/?q=${word}` },
        // This seems like the best solution.
        //https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#performing-multiple-requests-with-a-single-query

        //https://medium.com/nmc-techblog/rtk-query-best-practices-e0296d1679e6
        //https://github.com/reduxjs/redux-toolkit/issues/1891
        //READ THIS YOU IDIOT
        //onQueryStarted for multiple api calls
      }),
      //This needs to changed  *** may use this??? --> https://www.bbc.co.uk/search?q=jwst   ===> https://www.bbc.co.uk/search?q={word}
    }),
  }),
});

// use_Query --> _ is filled in by our endpoint, see getSearchKeyword
// this then becomes useGetSearchKeywordQuery ( see below )
export const { useGetSearchKeywordQuery } = searchApi;
 */

/**
 * If we ever need to revert back , for fucking up hard.
 * 
 * import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// I guess this is suppose to define the return type, but that was not working
// type ArticleSearchKeyword = {
//   length: number,
//   tags: string[]
// };

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }), //add the bbc website here
  endpoints: (builder) => ({
    getSearchKeyword: builder.query<string[], string>({
      query: (word: string) => ({url: "/",params: { url: `https://hn.algolia.com/?q=${word}` }}),
     
    }),
  }),
});

// use_Query --> _ is filled in by our endpoint, see getSearchKeyword
// this then becomes useGetSearchKeywordQuery ( see below )
export const { useGetSearchKeywordQuery } = searchApi;
 */
