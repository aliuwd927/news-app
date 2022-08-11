import React from "react";

import { useDispatch } from "react-redux";
import { updateSearch } from "./searchSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let grabSerchValue = new FormData(event.currentTarget);
    //Search Bar takes the value of the item we are trying to search on the news website.
    let searchBarValue = grabSerchValue
      .get("searchBarValue")
      ?.toString()
      .trim();
    console.log(searchBarValue);
    dispatch(updateSearch(searchBarValue || ""));
  }

  return (
    <div className="header_searchBar">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="searchBarValue"
            type="text"
            aria-label="Search"
            placeholder="Search"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

//Make sure to give it a debounce

/*
<form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" aria-label="Search" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>



      useEffect?



      Question:
      As you search, do we provide a list of websites? --> Answer: We will provide a list of websites in which we will scrape ourselves
      If yes, we need to scrape for list of websites. --> Bc we do have to provide it a list, we will list the websites in object. See Reducers in Redux.
                                                      --> Think about RSS, Check SiteMaps. 
      Then figure out if all websites have a common theme.
      Use that common theme to pull data.
      

*/