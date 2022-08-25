import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { useGetSearchKeywordQuery } from "../service/searchApi";

export default function NewsBody() {
  // change to keyword, since that is what is set from <SearchBar>
  const displayState: string = useSelector(
    (state: RootState) => state.search.keyword
  );

  // We use the query in the location where we will use the data.

  const { data, isLoading, isSuccess } = useGetSearchKeywordQuery(
    displayState,
    { skip: !displayState }
  );

  let getImgURL = (data?.apiOne[0] as any)?.getImgRole;
  let getImgURLSlice = getImgURL?.slice(5, -2);

  console.log((data?.apiOne[0] as any)?.titleAll);
  console.log((data?.apiTwo[0] as any)?.titleAll);
  console.log((data?.apiThree[0] as any)?.titleAll);

  return (
    <div className="newsBody">
      {isLoading && <div>Loading search "{displayState}"</div>}
      {isSuccess && <img src={getImgURLSlice} alt="img" />}
      {isSuccess && <img src={(data?.apiTwo[0] as any).img} alt="img"></img>}
      {isSuccess && <img src={(data?.apiThree[0] as any).img} alt="img"></img>}
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

/**
 * 
 * https://stackblitz.com/edit/vitejs-vite-vbv8kj?file=src%2FApp.tsx,src%2Fservices%2Fposts.ts,src%2Fstore.ts&terminal=dev
 * 
 * const {
    data,
    isLoading: loadingLeft,
    isSuccess: successLeft,
  } = useGetSearchKeywordQuery(displayState, {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      data: data ? data[0] : "",
      isSuccess,
      isLoading,
    }),
  });

















   return (
    <div className="newsBody">
      {isLoading && <div>Loading search "{displayState}"</div>}
      <div>
        {isSuccess &&
          data?.apiOne.map((tag: string, index: number) => (
            <article key={index} dangerouslySetInnerHTML={{ __html: tag }} />
          ))}
        ,
        {isSuccess &&
          data?.apiTwo.map((tag: string, index: number) => (
            <article key={index} dangerouslySetInnerHTML={{ __html: tag }} />
          ))}
        ,
        {isSuccess &&
          data?.apiThree.map((tag: string, index: number) => (
            <article key={index} dangerouslySetInnerHTML={{ __html: tag }} />
          ))}
      </div>
    </div>
  );




  {isSuccess && (
        <div
          dangerouslySetInnerHTML={{
            __html: (data?.apiThree[0] as any).img || "",
          }}
        ></div>
      )}
 */
