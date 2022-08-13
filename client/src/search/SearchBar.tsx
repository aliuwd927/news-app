import React from "react";
import { useDispatch } from "react-redux";
import { updateSearch } from "./searchSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let grabSerchValue = new FormData(event.currentTarget);
    //Search Bar takes the value of the item we are trying to search on the news website.
    let searchBarValue = grabSerchValue
      .get("searchBarValue")
      ?.toString()
      .trim();
    //Fetch request consists of two await calls.

    let htmlObj: string[] = [];

    await fetch(
      `http://localhost:4000/?url=https://hn.algolia.com/?q=${searchBarValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        htmlObj = data;
        console.log(htmlObj);
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(updateSearch(htmlObj));
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
      




      tom1269_: you can do <div contentEditable='true' dangerouslySetInnerHTML={{ __html: htmlObj }}></div>

*/

// This is for pokemon

// await fetch(`http://localhost:4000/pokemon/${searchBarValue}`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("GET:");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// await fetch(`http://localhost:4000/pokemon/`, {
//   method: "POST",
//   body: JSON.stringify({ name: searchBarValue }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("POST:");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
