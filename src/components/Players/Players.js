import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { playerData } from "../../utils/playerData";
import PlayerCard from "../PlayerCard/PlayerCard";
import Searchbar from "../Searchbar/Searchbar";
import Navbar from "../Navbar/Navbar";
import "./Players.css";

const Players = (props) => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setsearchTerm] = useState("");

  const playersPerPage = 9;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSelectOption = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSearch = (searchTerm) => {
    setsearchTerm(searchTerm);
  };

  const filteredPlayers = playerData.player
    .filter((player) => {
      return selectedRole === "All" || player.role.toLowerCase() === selectedRole.toLowerCase();
    })
    .filter((player) => {
      return player.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const pageCount = Math.ceil(filteredPlayers.length / playersPerPage);
  const displayedPlayers = filteredPlayers.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage);
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
              <select className="filter" value={selectedRole} onChange={handleSelectOption}>
                <option value="All">View All</option>
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
          </div>
          <div className='paginate-div'>
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
