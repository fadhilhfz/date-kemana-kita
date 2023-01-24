import React from "react";
import "../css/Modal.css";
import gmapIcon from "../static/img/gmap.png";
import moneyIcon from "../static/img/money.png";
import closeIcon from "../static/img/close2.png";

export default function Modal({ data, setIsModalOpened }) {
  const { type, name, desc, todo, fee, latitude, longitude, imgUrl } = data;

  return (
    <>
      <div className="Modal-blur"></div>
      <div className="Modal">
        <div className="Modal-header">
          <img src={imgUrl} alt={name} className="Image-header" />
          <img
            src={closeIcon}
            alt="close_button"
            className="Close"
            style={{ width: 20, height: "auto" }}
            onClick={() => setIsModalOpened(false)}
          />
        </div>
        <div className="Modal-body">
          <div className="Date-Category">{type} Date</div>
          <div className="Place-Title">Date di {name}!</div>
          <div className="Place-Description">{desc}</div>
          <div className="Date-Tips">Hal Yang Bisa Kamu Lakukan</div>
          <div className="Date-Tips-List">
            <ul>
              {todo.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="Fee-Title">Biaya Masuk</div>
          <div className="Fee">
            <img
              src={moneyIcon}
              alt="money"
              style={{ width: 40, height: "auto" }}
            />
            Rp {fee} / orang
          </div>
          <a
            href={`https://www.google.com/maps?daddr=${latitude},${longitude}&dirflg=d`}
            rel="noreferrer"
            target="_blank"
            className="Google-Maps"
          >
            <div>Lihat di Google Maps</div>
            <img
              src={gmapIcon}
              alt="google map icon"
              style={{ width: 40, height: "auto" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
