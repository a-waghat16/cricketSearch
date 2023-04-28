import React, { useState } from "react";
import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchbar = (props) => {
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setsearchTerm(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <input type="text" placeholder="Search by player Name" className="search-field" value={searchTerm} onChange={handleInputChange} />
      <button className="search-button" onClick={handleSearch} >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default Searchbar;
