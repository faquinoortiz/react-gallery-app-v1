import React from "react";

function Search ({ on Search }){
    const [query, setQuery] = useState ('');

    const handleSearch = () => {

        onSearch(query);
    
    };

    return (
    <div className="search">
     <input
        type="text"
        placeholder="Search for the photos..."
        value= {query}
        onChange={(e)} => setQuery(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
    </div>

    );
}

export default Search;