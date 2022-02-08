import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results Half-split">
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="Quarter" key={index}>
              <p className="partOfSpeech">{meaning.partOfSpeech}</p>
              <h2>{meaning.definitions[0].definition}</h2>
              <h3>"{meaning.definitions[0].example}"</h3>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
