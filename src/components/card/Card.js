import React from 'react';
import "./Card.css";
import { useState } from "react";

export default function Card({ title, question, answer, isBookmarked }) {
    const [hide, setHide] = useState(false);
    const toggleAnswer = () => {
      setHide(!hide);
    };
    return (
    <article className="Cardcontainer">
      <img src={ isBookmarked === true ? "assets/bookmark-active.png" : "assets/bookmark.png" } width="40px" alt="Bookmark icon for question card">
      </img>
       <h2>{title}</h2>
       <p>{question}</p>
       <button className="Answerbutton" onClick={toggleAnswer}>
        {hide ? "Show Answer" : "Hide Answer"}
       </button>
       <p className={hide ? "hidden" : "answer"}>{answer}</p>
       <div className="Tagscontainer">
       <button className="Cardtags">#html</button>
       <button className="Cardtags">#css</button>
       <button className="Cardtags">#js</button>
       <button className="Cardtags">#react</button>
       </div>
    </article>
    );
  }