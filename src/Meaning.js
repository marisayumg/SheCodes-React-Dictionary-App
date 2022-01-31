import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let numbering = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="Meaning">
      <div>
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="result">
            <p className="definition">
              {numbering[index]}. {definition.definition}
            </p>
            <br />
            <em>'{definition.example}'</em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
