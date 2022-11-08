import React from "react";
import "./bookmark.css";
import CardContainer from "../../components/CardContainer/CardContainer";

export default function Bookmark(props) {
  return (
        <section
        id="bookmark"
        style={{ display: props.page === "bookmark" ? "block" : "none" }}
        >
        <div>
        <CardContainer questioncards={props.cards.filter((card)=>card.isBookmarked)} />
        </div>
        </section>
    )
    }

//  const bookmarkedCards = cards.filter((card) => card.isBookmarked);
//  console.log(bookmarkedCards);
//  return (
//      <section
//    id="bookmark"
//    style={{ display: active.page === "bookmark" ? "block" : "none" }}
//    >
//    {cards.map(( card, isBookmarked ) => {
//    if (card.isBookmarked) {
//      return (
//      <CardContainer questioncards={cards} isBookmarked={isBookmarked.true} />
//      );
//    }
//    else {
//      return (
//      <p>You have not created any cards yet.</p>
//      )
//    }
//  }
//    )}
//  </section>
//  );
//}