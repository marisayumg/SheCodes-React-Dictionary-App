import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [audio, setAudio] = useState("");
  let [phonetics, setPhonetics] = useState("");
  let [results, setResults] = useState(null);
  let [photo1, setPhoto1] = useState(null);
  let [photo2, setPhoto2] = useState(null);
  let [photo1alt, setPhoto1alt] = useState(null);
  let [photo2alt, setPhoto2alt] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [origin, setOrigin] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setPhonetics(response.data[0].phonetics[0].text);
    setAudio(response.data[0].phonetics[0].audio);
    setResults(response.data[0]);
    setOrigin(response.data[0].origin);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhoto1(response.data.photos[0].src.portrait);
    setPhoto2(response.data.photos[1].src.portrait);
    setPhoto1alt(response.data.photos[0].alt);
    setPhoto2alt(response.data.photos[1].alt);
  }

  function search() {
    /* Dictionary API call */
    /* Documentation: https://dictionaryapi.dev/ */
    let ApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(ApiUrl).then(handleDictionaryResponse);

    /* Pexels API call */
    /* Documentation: https://www.pexels.com/api/documentation/ */
    let PexelsApiKey = `563492ad6f917000010000010fc4845dc4274f2f966d34d83b0a9a51`;
    let PexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=2`;
    let headers = { Authorization: `Bearer ${PexelsApiKey}` };
    axios.get(PexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  /* Changes keyword everytime we type */
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Half">
          <img src={photo1} alt={photo1alt} />
        </div>
        <div className="Half-split">
          <div className="Quarter Centered">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search a keyword"
                autoFocus={true}
                onChange={handleKeyword}
              />
            </form>
            <h1>{keyword}</h1>
            <button
              className="Phonetics"
              href={audio}
              target="_blank"
              rel="noreferrer"
            >
              {phonetics}
            </button>
          </div>
          <div className="Quarter">
            <p className="partOfSpeech">Origin</p>
            <h2>{origin}</h2>
          </div>
        </div>
        <Results results={results} />
        <div className="Half">
          <img src={photo2} alt={photo2alt} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
