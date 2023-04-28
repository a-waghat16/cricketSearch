import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchData, options } from "../../utils/fetchData";
import "./PlayerInfo.css";

const PlayerInfo = () => {
  const [playerInfo, setplayerInfo] = useState([]);
  const { id } = useParams();
  const imgSrc = `http://i.cricketcb.com/stats/img/faceImages/${id}.jpg`;
  const url = `https://unofficial-cricbuzz.p.rapidapi.com/players/get-info?playerId=${id}`;

  useEffect(() => {
    const fetchPlayerData = async () => {
      const data = await fetchData(url, options);
      setplayerInfo(data);
    };
    fetchPlayerData();
  }, []);

  let bioInfo = "";

  if (playerInfo.bio) {
    bioInfo = playerInfo.bio.split("<br/><br/>").slice(0, 2);
  }

  return (
    <div>
      <div className="player-detail-total">
        <div className="player-detail-image">
          <Link to='/playerpage'>
            <FontAwesomeIcon icon={faRotateLeft} />
          </Link>
          <h4>Back To Players</h4>
          <img src={imgSrc} alt="player" />
        </div>
        <div className="player-detail-text">
          <div>
            <h2>{playerInfo.name}</h2>
            <h4>Stats:</h4>
            <p>
              {playerInfo.role} | {playerInfo.bat} | {[playerInfo.bowl ? playerInfo.bowl : "No bowling style"]}
            </p>
          </div>
          <div className="player-bio">
            <h2 className='player-bio'>Player Bio</h2>
            <p>{bioInfo}</p>
            {console.log(`typeofBioInfo=${typeof bioInfo}`)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
