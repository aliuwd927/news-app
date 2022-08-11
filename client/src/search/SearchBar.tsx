import { response } from "express";
import React from "react";
import express from "express";
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
    console.log(searchBarValue);
    dispatch(updateSearch(searchBarValue || ""));

    // fetch("http://localhost:4000/").then((response) => {
    //   console.log(response.json());
    //   // return response.json();
    // });

    //Fetch request consists of two await calls.
    let url = "http://localhost:4000/";
    // let response = await fetch(url);
    // let result = await response.json();

    let post = await fetch(url, {
      method: "POST",

      body: JSON.stringify({
        value: "test",
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let postResult = await post.json();
    console.log(postResult);

    //Left off at middle ware expressJS.
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
