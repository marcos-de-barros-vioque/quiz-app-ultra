import React from 'react';
import "./Card.css";
import { useState } from "react";
//import { Cardscontent } from "../../input/Cardscontent";

export default function Card() {
    const [hide, setHide] = useState(false);
    const toggleAnswer = () => {
      setHide(!hide);
    };
    return (
    <article className="Cardcontainer">
       <h2>Starting with HTML</h2>
       <p>Is HTML an easy language?</p>
       <button className="Answerbutton" onClick={toggleAnswer}>
        {hide ? "Show Answer" : "Hide Answer"}
       </button>
       <p className={hide ? "hidden" : "answer"}>HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!</p>
    </article>
    );
  }