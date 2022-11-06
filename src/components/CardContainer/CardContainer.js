import React from 'react';
import "./CardContainer.css";

import Card from "../../components/card/Card";

export default function CardContainer({ questioncards }) {
    return (
        <div className="App__Card">
            {questioncards.map(({ title, question, answer }) => (
                <Card title={title} question={question} answer={answer} />
            ))}
        </div>
    );
}