import React from 'react';
import "./App.css";
//import { Cardscontent } from "./input/Cardscontent";
//import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Bookmark from "./components/bookmark/bookmark";
import Form from "./components/form/form";
import Profile from "./components/profile/profile";
import Home from "./components/home/home";
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState();
  const handleClickPage = (page) => {
    setPage(page);
  };
  return (
    <main className="App__Header">
      <Header />
      <div className="App__Card">
      <Home page={page} setPage={setPage} />
      <Bookmark page={page} setPage={setPage} />
      <Form page={page} setPage={setPage} />
      <Profile page={page} setPage={setPage} />
      </div>
      <div className="App__Navigation">
      <Navigation 
      page={page}
      setPage={setPage}
      handleClickPage={handleClickPage}
      />
      </div>
    </main>
  );
}