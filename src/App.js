import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  return (
    <div className="App__Header">
      <Header />
      <main className="App__Card">
      <Card />
      <Card />
      <Card />
      </main>
      <div className="App__Navigation">
      <Navigation />
      </div>
    </div>
  );
}