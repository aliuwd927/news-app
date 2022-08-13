import type { RootState } from "../store";
import { useSelector } from "react-redux";

export default function NewsBody() {
  const displayState = useSelector((state: RootState) => state.search.value);
  console.log(displayState);
  return (
    <div className="newsBody">
      <div>
        <div dangerouslySetInnerHTML={{ __html: displayState.join("") }}></div>
      </div>
    </div>
  );
}
