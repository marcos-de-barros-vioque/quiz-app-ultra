import React from 'react';
import "./Card.css";
import { Cardscontent } from "../../input/Cardscontent";
import { useState } from "react";

export default function Card({ question, answer }) {
    const [hide, setHide] = useState(false);
    const toggleAnswer = () => {
      setHide(!hide);
    };
    return (
    <article className="Cardcontainer">
    <h2>CSS syntax</h2>
    <p className="Question">{question}</p>
    <button className="Answerbutton" onClick={toggleAnswer}>
        {hide ? "Show Answer" : "Hide Answer"}
      </button>
      <p className={hide ? "hidden" : "answer"}>{answer}</p>
      <ul className="Cardtags"></ul>
    </article>
    );
  }