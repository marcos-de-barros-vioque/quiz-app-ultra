import React from 'react';
import "./CardContainer.css";

import Card from "../../components/card/Card";

export default function CardContainer({ questions }) {
    return (
        <div className="App__Card">
            {questions.map(({ title, question, answer }) => (
                <Card title={title} question={question} answer={answer} />
            ))}
        </div>
    );
}