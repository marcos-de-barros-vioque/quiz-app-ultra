import React from "react";
import "./profile.css";

export default function Profile(active) {
  return (
    <section
      id="profile"
      style={{ display: active.page === "profile" ? "block" : "none" }}
    >
    <p>Coming soon...</p>
    </section>
  );
}