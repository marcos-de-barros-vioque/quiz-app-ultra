import React from 'react';
import "./home.css";
import { Cardscontent } from "../../input/Cardscontent";
import CardContainer from "../../components/CardContainer/CardContainer";

export default function Home() {
    return (
        <main className="App__Card">
            <CardContainer questioncards={Cardscontent} />
        </main>
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