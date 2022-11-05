import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import { Cardscontent } from "./input/Cardscontent";

export default function App() {
  return (
    <main className="App__Header">
      <Header />
      <div className="App__Card">
      <Card question={Cardscontent[0]} />
      <Card question={Cardscontent[1]} />
      <Card question={Cardscontent[2]} />
      <Card question={Cardscontent[3]} />
      </div>
      <div className="App__Navigation">
      <Navigation />
      </div>
    </main>
  );
}