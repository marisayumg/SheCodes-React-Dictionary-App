import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results Half-split">
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="Quarter" key={index}>
              <p className="partOfSpeech">{meaning.partOfSpeech}</p>
              <h2>{meaning.definitions[0].definition}</h2>
              <Synonyms synonyms={meaning.definitions[0].synonyms} />
              <Examples examples={meaning.definitions[0].example} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
