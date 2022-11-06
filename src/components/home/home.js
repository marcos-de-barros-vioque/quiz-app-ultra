import React from 'react';
import "./home.css";
import { Cardscontent } from "../../input/Cardscontent";
import CardContainer from "../../components/CardContainer/CardContainer";

export default function Home(active) {
    return (
        <section
        id="home"
        style={{ display: active.page === "home" ? "block" : "none" }}
        >
        <div className="App__Card">
            <CardContainer questioncards={Cardscontent} />
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