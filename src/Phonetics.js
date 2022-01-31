import React from "react";

export default function Phonetics(props) {
  return (
    <a
      href={props.phonetics.audio}
      target="_blank"
      rel="noreferrer"
      className="Phonetics"
    >
      <div className="play-btn"></div>/ {props.phonetics.text} /
    </a>
  );
}
