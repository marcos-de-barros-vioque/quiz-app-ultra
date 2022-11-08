import React from "react";
import "./profile.css";

export default function Profile(props) {
  return (
    <section
      id="profile"
      style={{ display: props.page === "profile" ? "block" : "none" }}
    >
    <p>Coming soon...</p>
    </section>
  );
}