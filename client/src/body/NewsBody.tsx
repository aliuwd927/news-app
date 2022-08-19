import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { useGetSearchKeywordQuery } from "../service/searchApi";

export default function NewsBody() {
  // change to keyword, since that is what is set from <SearchBar>
  const displayState: string = useSelector(
    (state: RootState) => state.search.keyword
  );

  // We use the query in the location where we will use the data.

  const {
    posts,
    isLoading: loading,
    isSuccess: success,
  } = useGetSearchKeywordQuery(displayState, {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      posts: data ? data[0] : "",
      isSuccess,
      isLoading,
    }),
  });

  return (
    <div className="newsBody">
      {loading && <div>Loading search "{displayState}"</div>}
      <div>
        {success &&
          [posts].map((post: string, index: number) => (
            <article key={index} dangerouslySetInnerHTML={{ __html: post }} />
          ))}
      </div>
    </div>
  );
}

/**
 * Code Reversion
 * {isSuccess &&
          data.map((tag: string, index: number) => (
            <article key={index} dangerouslySetInnerHTML={{ __html: tag }} />
          ))}


           {isSuccess &&
          [data[0]].map((tag: string, index: number) => (
            <article key={index} dangerouslySetInnerHTML={{ __html: tag }} />
          ))}
 */
