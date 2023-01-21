import React from "react";
import "../css/Modal.css";
import gmapIcon from "../static/img/gmap.png";
import moneyIcon from "../static/img/money.png";
import closeIcon from "../static/img/close2.png";

export default function Modal({ data, setIsModalOpened }) {
  return (
    <div className="Modal">
      <div className="Modal-header">
        <img
          src="https://images.unsplash.com/photo-1635924201021-e8ae80c2bdc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80"
          alt="Monas"
          className="Image-header"
        />
        <img
          src={closeIcon}
          alt="close_button"
          className="Close"
          style={{ width: 20, height: "auto" }}
          onClick={() => setIsModalOpened(false)}
        />
      </div>
      <div className="Modal-body">
        <div className="Date-Category">Outdoor Date</div>
        <div className="Place-Title">Monumen Nasional</div>
        <div className="Place-Description">
          Monumen Nasional atau yang disingkat dengan Monas atau Tugu Monas
          adalah monumen peringatan setinggi 132 meter (433 kaki) yang terletak
          tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat.
        </div>
        <div className="Date-Tips">Things you can do</div>
        <div className="Date-Tips-List">
          <ul>
            <li>Bawa alas karena Anda dapat piknik disini.</li>
            <li>Anda dapat melihat museum yang ada di dalam Monas.</li>
            <li>Siapkan moment selfie terbaikmu.</li>
          </ul>
        </div>
        <div className="Fee-Title">Entrance fee</div>
        <div className="Fee">
          <img
            src={moneyIcon}
            alt="money"
            style={{ width: 40, height: "auto" }}
          />
          Rp 20.000 / orang
        </div>
        <a
          href="https://www.google.com/maps?daddr=-6.175392,106.827194&dirflg=d"
          rel="noreferrer"
          target="_blank"
          className="Google-Maps"
        >
          <div>See in Google Maps</div>
          <img
            src={gmapIcon}
            alt="google map icon"
            style={{ width: 40, height: "auto" }}
          />
        </a>
      </div>
    </div>
  );
}
