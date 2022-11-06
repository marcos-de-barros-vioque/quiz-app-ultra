import React from "react";
import "./bookmark.css";

export default function Bookmark(active) {
  return (
    <section       
    id="bookmark"
    style={{ display: active.page === "bookmark" ? "block" : "none" }}
    >
    <p>Coming soon...</p>
    </section>
  );
}