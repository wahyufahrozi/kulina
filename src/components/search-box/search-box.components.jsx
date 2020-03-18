import React from "react";
import "./search-box.styles.scss";
export const SearchBox = ({ placeholder, handleChange }) => (
  <div class="input-container">
    <i class="material-icons icon">place</i>
    <input
      class="input-field"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
