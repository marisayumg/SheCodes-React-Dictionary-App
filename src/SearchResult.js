import React from "react";
import Meaning from "./Meaning";

export default function SearchResult(props) {
  if (props.results) {
    return (
      <div className="SearchResult">
        <h1>{props.results.word}</h1>
        <p>{props.results.phonetic}</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
