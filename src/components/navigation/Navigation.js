import "./Navigation.css";
import React from 'react';

export default function Navigation(active) {
    return (
      <nav className="navbar">
        <ul>
        <li>
        <a 
        href="#home"
        onClick={() => active.handleClickPage("home")}
        >
          <img
            src={
              active.page === "home"
                ? "/assets/home-active.png"
                : "/assets/home.png"
            }
            alt="home page"
            width="40px"
          />
        </a>
        </li>
        <li>
        <a 
        href="#bookmark"
        onClick={() => active.handleClickPage("bookmark")}
        >
          <img
            src={
              active.page === "bookmark"
                ? "/assets/bookmark-active.png"
                : "/assets/bookmark.png"
            }
            alt="bookmark page"
            width="40px"
          />
        </a>
        </li>
        <li>
        <a 
        href="#form"
        onClick={() => active.handleClickPage("form")}
        >
          <img
            src={
              active.page === "form"
                ? "/assets/form-active.png"
                : "/assets/form.png"
            }
            alt="form page"
            width="40px"
          />
        </a>
        </li>
        <li>
        <a 
        href="#profile"
        onClick={() => active.handleClickPage("profile")}
        >
          <img
            src={
              active.page === "profile"
                ? "/assets/profile-active.png"
                : "/assets/profile.png"
            }
            alt="profile page"
            width="40px"
            />
        </a>
        </li>
        </ul>
       </nav>
    );
}