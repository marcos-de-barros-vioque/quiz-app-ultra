import React from 'react';
import "./home.css";

import CardContainer from "../../components/CardContainer/CardContainer";

export default function Home(props) {
    console.log(props.cards)
    return (
        <section
        id="home"
        style={{ display: props.page === "home" ? "block" : "none" }}
        >
        <div>
            <CardContainer questioncards={props.cards} />
        </div>
        </section>
    )
}
//export default function Home() {
//    return (
//        <div className="App__Card">
//        <Card question={Cardscontent[0]} />
//        <Card question={Cardscontent[1]} />
//        <Card question={Cardscontent[2]} />
//        <Card question={Cardscontent[3]} />
//        </div>
//);
//}