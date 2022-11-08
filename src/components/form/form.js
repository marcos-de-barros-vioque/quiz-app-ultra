import React from "react";
import "./form.css";

export default function Form(props) {
  return (
    <section
      id="form"
      style={{ display: props.page === "form" ? "block" : "none" }}
    >
    <p>This page is under construction...</p>
    </section>
  );
}