import React from "react";
import "../SearchBar.css"

const SearchBar = ({query, updateQuery}) => {
    
    return (
        <>
            <label htmlFor="article-search">
                <span className="visually-hidden">Search Articles</span>
            </label>
            <input
                key="le39sdj"
                type="text"
                id="article-search"
                placeholder="Search Articles"
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
            />
        </>
    )
}

export default SearchBar;