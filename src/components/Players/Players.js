import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { playerData } from "../../utils/playerData";
import PlayerCard from "../PlayerCard/PlayerCard";
import Searchbar from "../Searchbar/Searchbar";
import Navbar from "../Navbar/Navbar";
import "./Players.css";

const Players = (props) => {
  const [selectedOption, setSelectedOption] = useState("select role");
  const [currentPage, setCurrentPage] = useState(0);
  const [playerBase, setplayerBase] = useState(playerData.player);
  const [displayedPlayers, setdisplayedPlayers] = useState(playerBase.slice(currentPage * 9, (currentPage + 1) * 9));

  const playersPerPage = 9;
  let pageCount = Math.ceil(playerBase.length / playersPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = (searchTerm) => {
    setSelectedOption('select role');
    setCurrentPage(0);
    setplayerBase(playerData.player);
    const results = playerData.player.filter((player) => player.name.includes(searchTerm));
    console.log(`The player results for ${searchTerm} were ${results}`)
    setdisplayedPlayers(results.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage));
    pageCount = Math.ceil(results.length / playersPerPage)
  };

  useEffect(() => {
    if (selectedOption === "select role") {
      setdisplayedPlayers(playerData.player.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage));
    } else {
      const filteredPlayers = playerData.player.filter((player) => player.role === selectedOption);
      setdisplayedPlayers(filteredPlayers.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage));
      pageCount = Math.ceil(filteredPlayers.length / playersPerPage);
    }
  }, [selectedOption,currentPage]);

  return (
    <div>
      <div className="hero-section-total">
        <Navbar />
        <div className="player-page-search">
          <h2 className="player-page-hero-text">Browse Players</h2>
          <div className="searchbar-player-page">
            <Searchbar onSearch={handleSearch} />
          </div>
        </div>
      </div>
      <div className="whole-page-container">
        <div className="whole-page">
          <div className="above-card-holder">
            <div>
              <h3 className="above-card-holder-h3">Search Results:</h3>
              <h4 className="above-card-holder-h4">
                Note: There are only players from England <br />
                and Australia due to API call restrictions
              </h4>
            </div>
            <div>
              <h3 className="above-card-holder-h3">Filter by role</h3>
              <select className="filter" value={selectedOption} onChange={handleSelectOption}>
                <option value="select role" disabled>
                  Select Role
                </option>
                <option value="select role">View All</option>
                <option value="Batsmen">Batsmen</option>
                <option value="Bowler">Bowler</option>
                <option value="All-Rounder">All-rounder</option>
                <option value="Wicket-Keeper">Wicket-Keeper</option>
              </select>
            </div>
          </div>
          <div className="cards-holder">
            {displayedPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                name={player.name}
                id={player.id}
                role={player.role}
                battingStyle={player.battingStyle}
                bowlingStyle={player.bowlingStyle}
                imgSrc={`http://i.cricketcb.com/stats/img/faceImages/${player.id}.jpg`}
              />
            ))}
            <ReactPaginate
              previousLabel="previous"
              nextLabel="next"
              breakLabel="..."
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="active"
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
