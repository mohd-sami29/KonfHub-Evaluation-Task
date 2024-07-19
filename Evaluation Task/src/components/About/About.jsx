import React from "react";
import useApi from "../Api/useApi";

function About() {
  const { data, error } = useApi();
  return (
    <>
      <h2>ABOUT EVENT</h2>
    </>
  );
}

export default About;
