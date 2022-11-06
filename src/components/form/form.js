import React from "react";
import "./form.css";

export default function Form(active) {
  return (
    <section
      id="form"
      style={{ display: active.page === "form" ? "block" : "none" }}
    >
    <p>Coming soon...</p>
    </section>
  );
}