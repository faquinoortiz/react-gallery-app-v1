import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//Main Imports for App
import Search from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
import apiKey from "./config";



function App() {
  const [photos, setPhotos] = useState([]);
  const [pageTitle, setPageTitle] = useState("Home");
  const [query, setQuery] = useState("cats");

  useEffect(() => {
    handleSearch(query);
  }, [query]);




  // Handles the search query
  const handleSearch = (searchQuery) => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&tags=${searchQuery}&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos.photo);
        setPageTitle(`Results for "${searchQuery}"`);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };



  // Function to handle changing the query state
  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };
  
  return (
    <BrowserRouter>
      <Search onSearch={handleChangeQuery} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList photos={photos} pageTitle="Cats" />} />
        <Route path="/dogs" element={<PhotoList photos={photos} pageTitle="Dogs" />} />
        <Route path="/computers" element={<PhotoList photos={photos} pageTitle="Computers" />} />
        <Route path="/search/:query" element={<PhotoList photos={photos} pageTitle={pageTitle} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;