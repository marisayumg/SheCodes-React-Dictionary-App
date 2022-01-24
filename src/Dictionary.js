import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import SearchResult from "./SearchResult";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    //API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
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
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateKeyword} />
        </form>
        <SearchResult results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
