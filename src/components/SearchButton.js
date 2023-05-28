import React from "react";
import "../css/SearchButton.css";

export default function Button({
  isLoading = false,
  handleClick = null,
  children,
}) {
  return (
    <button
      disabled={isLoading}
      className={isLoading ? "btn-map crs-not-allowed" : "btn-map crs-pointer"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
