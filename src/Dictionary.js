import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import SearchResult from "./SearchResult";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    //API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // https://www.pexels.com/api/documentation/
    let PexelsApiKey = `563492ad6f917000010000010fc4845dc4274f2f966d34d83b0a9a51`;
    let PexelsApiUrl = `https://api.pexels.com/v1/search?page=1&per_page=3&query=${keyword}`;
    let headers = { Authorization: `Bearer ${PexelsApiKey}` };
    axios.get(PexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Quadrant">
          <img src="https://images.pexels.com/photos/6631545/pexels-photo-6631545.jpeg" />
        </div>
        <div className="Quadrant">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={updateKeyword}
              placeholder="Search any keyword"
            />
          </form>
          <h1 className="Keyword">{keyword}</h1>
        </div>
        <div className="Quadrant">
          <SearchResult results={results} />
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
