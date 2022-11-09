import React from "react";
import "./form.css";

export default function Form(props) {
  return (
    <section
      id="form"
      style={{ display: props.page === "form" ? "block" : "none" }}
    >
    <form className="Formcontainer">
      <h3>Create a new card</h3>
      <label>Title</label>
      <textarea
        placeholder="Type here the title..."
      >
      </textarea>
      <label>Question</label>
      <textarea
        placeholder="Type here your question..."
      >
      </textarea>
      <label>Answer</label>
      <textarea
        placeholder="Type here the answer..."
      >
      </textarea>
      <button>Submit</button>
    </form>
    </section>
  );
}