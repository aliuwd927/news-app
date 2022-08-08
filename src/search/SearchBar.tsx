export default function SearchBar() {
  return (
    <div className="header_searchBar">
      <form>
        <label>
          <input type="text" aria-label="Search" placeholder="Search" />
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



*/
