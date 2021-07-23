import React from "react";
import "../SearchBar.css"

const SearchBar = ({onSearch}) => {
    return (
        <form action="/search" method="GET">
            <label htmlFor="article-search">
                <span className="visually-hidden">Search Articles</span>
            </label>
            <input
                type="text"
                id="article-search"
                placeholder="Search Articles"
                name="query"
            />
            <button type="submit" onClick={onSearch}>Search</button>
        </form>
    )
}

export default SearchBar;