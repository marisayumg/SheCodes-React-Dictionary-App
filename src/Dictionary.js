import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [audio, setAudio] = useState("");
  let [type, setType] = useState("");
  let [meaning, setMeaning] = useState("");
  let [example, setExample] = useState("");
  let [phonetics, setPhonetics] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setMeaning(response.data[0].meanings[0].definitions[0].definition);
    setExample(response.data[0].meanings[0].definitions[0].example);
    setType(response.data[0].meanings[0].partOfSpeech);
    setPhonetics(response.data[0].phonetics[0].text);
    setAudio(response.data[0].phonetics[0].audio);
    setResults(response.data[0]);
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
      <div className="Half-split">
        <div className="Quarter Centered">
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search a keyword"
              autoFocus={true}
              onChange={handleKeyword}
            />
          </form>
          <h1>{keyword}</h1>
          <a
            className="Phonetics"
            href={audio}
            target="_blank"
            rel="noreferrer"
          >
            {phonetics}
          </a>
        </div>
        <div className="Quarter">
          <p className="partOfSpeech">{type}</p>
          <h2>{meaning}</h2>
          <h3>"{example}"</h3>
        </div>
      </div>
      <Results results={results} />
      <div className="Half">
        <img
          src="https://images.pexels.com/photos/6631716/pexels-photo-6631716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="mushrooms"
        />
      </div>
    </div>
  );
}
