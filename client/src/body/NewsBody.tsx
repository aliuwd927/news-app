import type { RootState } from "../store";
import { useSelector } from "react-redux";
import { useGetSearchKeywordQuery } from "../service/searchApi";

export default function NewsBody() {
  // change to keyword, since that is what is set from <SearchBar>
  const displayState = useSelector((state: RootState) => state.search.keyword);

  // We use the query in the location where we will use the data.
  const { data, isSuccess, isLoading } = useGetSearchKeywordQuery(displayState);
  
  return (
    <div className="newsBody">
      {isLoading && <div>Loading search "{displayState}"</div>}
      <div>
        {isSuccess && data.map((tag: string, index: number) => <article key={index} dangerouslySetInnerHTML={{__html: tag}} />)}
      </div>
    </div>
  );
}
