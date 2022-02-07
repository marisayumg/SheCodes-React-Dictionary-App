import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  /* API call */
  function search(event) {
    event.preventDefault();
    /* Documentation: https://dictionaryapi.dev/ */
    let ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(ApiUrl).then(handleResponse);
  }

  /* Changes keyword everytime we type */
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="Half">
        <img
          src="https://images.pexels.com/photos/6631716/pexels-photo-6631716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="mushrooms"
        />
      </div>
      <div className="Half">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search a keyword"
            autoFocus={true}
            onChange={handleKeyword}
          />
        </form>
        <h1>{keyword}</h1>
      </div>
    </div>
  );
}
