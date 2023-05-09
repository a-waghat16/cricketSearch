import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaseballBatBall } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PlayerCard.css";

const PlayerCard = (props) => {
  const urlTo = `playerdetail/${props.id}`
  return (
    <Link className="card" to={urlTo}>
      <div className="player-image" style={{backgroundImage: `url(${props.imgSrc})`}} >
      </div>
      <div className="name">
        <h3 className="player-name">{props.name}</h3>
      </div>
      <div className="initial-info">
        <div className="role">
          <FontAwesomeIcon className="role-icon icon" icon={faPerson} />
          <p>Role:</p>
          <p>{props.role}</p>
        </div>
        <div className="batting">
          <FontAwesomeIcon className="batting-icon icon" icon={faBaseballBatBall} />
          <p>Batting-Style:</p>
          <p>{props.battingStyle}</p>
        </div>

        <div className="bowling">
          <FontAwesomeIcon className="bowling-icon icon" icon={faBaseball} />
          <p>Bowling-Style:</p>
          <p>{[props.bowlingStyle ? props.bowlingStyle : 'No Bowling Style']}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
