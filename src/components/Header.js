import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import heartIcon from "../static/img/heart.png";
import instagramIcon from "../static/img/ig.png";

export default function Header() {
  const imagesUrl = [
    "https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1587053114035-e94f4162a358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1657025238579-5a75d0903190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1642051248566-0beaf9808a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdlbG9yYSUyMGJ1bmclMjBrYXJub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1572603807708-e6d779a1873f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  ];

  return (
    <div className="Header">
      <h1 className="Header-title">
        <span className="first-line">
          Bosan dengan <span className="breakthrough">Netflix and Chill</span> ?
        </span>
        Temukan date yang unik dan seru disini.
      </h1>
      <div className="Header-carousel">
        {imagesUrl.map((url) => (
          <div className="Header-carousel-item" key={url}>
            <img src={url} alt="a place" />
          </div>
        ))}
      </div>
      <Link to="/explore" className="Try-button">
        Mulai
      </Link>
      <div className="Header-info">** Jabodetabek only</div>
      <div className="Header-created">
        <div>
          Curated with
          <span style={{ marginLeft: 14, marginRight: 14 }}>
            <img
              src={heartIcon}
              alt="love"
              style={{ width: 16, height: "auto" }}
            />
          </span>
          by Fadhil
        </div>
        <span>
          <a
            href="https://instagram.com/fadhilhfz"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagramIcon}
              alt="instagram"
              style={{ width: 19, height: "auto" }}
            />
          </a>
        </span>
      </div>
    </div>
  );
}
