import React from "react";
import "./bookmark.css";

export default function Bookmark(props) {
  return (
    <section
      id="bookmark"
      style={{ display: props.page === "bookmark" ? "block" : "none" }}
    >
    </section>
  );
}