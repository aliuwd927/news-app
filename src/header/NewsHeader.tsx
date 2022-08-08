import HeaderTitle from "./HeaderTitle";
import NewsNavHeader from "./NavSection";
import SearchBar from "../search/SearchBar";
export default function NewsHeader() {
  return (
    <div className="newsHeader_Container">
      <header className="newsHeader_Header">
        <HeaderTitle />
        <NewsNavHeader />
        <SearchBar />
      </header>
    </div>
  );
}
