import "./Navigation.css";
import React from 'react';

export default function Navigation(props) {
    return (
      <nav className="navbar">
        <ul>
        <li>
        <a 
        href="#home"
        >
          <img
            src={
              props.page === "home"
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
        >
          <img
            src={
              props.page === "bookmark"
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
        >
          <img
            src={
              props.page === "form"
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
        >
          <img
            src={
              props.page === "profile"
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