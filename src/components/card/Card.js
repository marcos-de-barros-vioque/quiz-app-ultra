import React from 'react';
import "./Card.css";
import { useState } from "react";

export default function Card({ question }) {
    const [hide, setHide] = useState(false);
    const toggleAnswer = () => {
      setHide(!hide);
    };
    return (
    <article className="Cardcontainer">
       <h2>{question.title}</h2>
       <p>{question.question}</p>
       <button className="Answerbutton" onClick={toggleAnswer}>
        {hide ? "Show Answer" : "Hide Answer"}
       </button>
       <p className={hide ? "hidden" : "answer"}>{question.answer}</p>
    </article>
    );
  }