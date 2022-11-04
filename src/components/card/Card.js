import React from 'react';
import "./Card.css";
import { useState } from "react";

export default function Card() {
    const [hide, setHide] = useState(false);
    const toggleAnswer = () => {
      setHide(!hide);
    };
    return (
    <article className="Cardcontainer">
    <h2>CSS syntax</h2>
    <p className="Question">How does the CSS syntax look like?</p>
    <button className="Answerbutton" onClick={toggleAnswer}>
        {hide ? "Show Answer" : "Hide Answer"}
      </button>
      <p className={hide ? "hidden" : "answer"}>CSS is a rule-based language — with CSS you define the rules by specifying 
      groups of styles that should be applied to particular elements or groups of elements on your web page.</p>
      <ul className="Cardtags"></ul>
    </article>
    );
  }