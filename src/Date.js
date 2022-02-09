import React from "react";

export default function Date() {
  let current = new Date();
  let date = `${current.getDate()}`;

  return <p className="Hour">{date} — 16:28:49</p>;
}
