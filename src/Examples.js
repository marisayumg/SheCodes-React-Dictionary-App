import React from "react";

export default function Example(props) {
  if (props.examples) {
    return <h3>E.g. "{props.examples}"</h3>;
  } else {
    return null;
  }
}
