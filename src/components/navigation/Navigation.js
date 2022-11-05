import "./Navigation.css";

export default function Navigation(props) {
    return (
      <nav className="navbar">
        <a 
        href="#home"
        onClick={() => props.handleClickPage("home")}
        style={{
          backgroundColor: props.page === "home" ? "blue" : "red",
        }}
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
        <a 
        href="#bookmark"
        onClick={() => props.handleClickPage("bookmark")}
        style={{
          backgroundColor: props.page === "bookmark" ? "blue" : "red",
        }}
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
        <a 
        href="#form"
        onClick={() => props.handleClickPage("form")}
        style={{
          backgroundColor: props.page === "form" ? "blue" : "red",
        }}
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
        <a 
        href="#profile"
        onClick={() => props.handleClickPage("profile")}
        style={{
          backgroundColor: props.page === "profile" ? "blue" : "red",
        }}
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
       </nav>
    );
}