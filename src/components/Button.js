import React from "react";
import "../css/Button.css";
import { Hearts } from "react-loader-spinner";

export default function Button({ isLoading, handleClick = null }) {
  return isLoading ? (
    <button
      //   disabled={isLoading}
      className="btn-map"
      onClick={handleClick}>
      <Hearts
        height="19"
        width="100"
        color="white"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass="loader-center"
        visible={true}
      />
    </button>
  ) : (
    <button className="btn-map" onClick={handleClick}>
      Find me one !
    </button>
  );
}
