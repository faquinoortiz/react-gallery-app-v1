import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from "./Search";
import Nav from "./Nav";
import PhotoList from "./PhotoList";
import apiKey from "src./config";

function App() {
  const [photos, setPhotos] = useState([]);
  const [pageTitle, setPageTitle] = useState("Home"); 


  useEffect(() => {
    // Fetch photos from the Flickr API
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&tags=sunsets&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos.photo);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  const handleSearch = (query) => {
    
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&tags=${query}&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos.photo);
        setPageTitle(`Results for "${query}"`);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/"element={<Navigate to="/cats" />}/>
        <Route path="/cats" element={<PhotoList photos={photos} pageTitle="Cats" />} />
        <Route path="/dogs" element={<PhotoList photos={photos} pageTitle="Dogs" />} />
        <Route path="/computers"element={<PhotoList photos={photos} pageTitle="Computers" />}
        />
        <Route path="/search/:query" element={<PhotoList photos={photos} pageTitle={pageTitle} />
          }
        />
      </Routes>
      <Search onSearch={handleSearch} />
      <Nav />
    </BrowserRouter>
    
  );
}


export default App;