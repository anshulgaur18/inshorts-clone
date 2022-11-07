import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <span className="name">
        Inshorts Clone Made by -{""}
        <a
          href="https://www.linkedin.com/in/anshul-gaur-83194a110/"
          target="__blank"
        >
          Anshul Gaur
        </a>
      </span>

      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/anshulgaur18/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/anshul-gaur-83194a110/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/anshulgaur18" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
