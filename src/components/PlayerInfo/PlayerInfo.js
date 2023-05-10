import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faRuler, faBaby, faHouse } from "@fortawesome/free-solid-svg-icons";
import { fetchData, options, youTubeOptions } from "../../utils/fetchData";
import VideoCard from "../VideoCard/VideoCard";
import "./PlayerInfo.css";

const PlayerInfo = () => {
  const [playerInfo, setplayerInfo] = useState([]);
  const [youTubeUrl, setyouTubeUrl] = useState();
  const [youTubeInfo, setyouTubeInfo] = useState([]);
  const { id } = useParams();
  const imgSrc = `http://i.cricketcb.com/stats/img/faceImages/${id}.jpg`;
  const url = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`;

  useEffect(() => {
    const fetchPlayerData = async () => {
      const data = await fetchData(url, options);
      setplayerInfo(data);
      const name = data.name;
      const updatedName = name.replace(/\s/g, "+");
      setyouTubeUrl(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${updatedName}`);
    };
    fetchPlayerData();
  }, [url]);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      if (youTubeUrl) {
        const youTubeData = await fetchData(youTubeUrl, youTubeOptions);
        console.log(`This = ${youTubeUrl}`);
        const youTubeSliced = youTubeData.items.slice(0, 3);
        setyouTubeInfo(youTubeSliced);
      }
    };
    fetchYoutubeVideos();
  }, [youTubeUrl]);

  let bioInfo = "";

  if (playerInfo.bio) {
    bioInfo = playerInfo.bio.split("<br/><br/>").slice(0, 4);
  }

  return (
    <div>
      <div className="player-detail-total">
        <div className="player-detail-top">
          <div className="player-detail-image">
            <Link to="/playerpage">
              <FontAwesomeIcon icon={faRotateLeft} className="back"/>
            </Link>
            <h4 className="back-text">Back To Players</h4>
            <img src={imgSrc} alt="player" />
          </div>
          <div className="personal-details">
            <h3 className="player-name">{playerInfo.name}</h3>
            <h4 className="h4-heading">Personal Details:</h4>
            <p>
              {playerInfo.role} | {playerInfo.bat} | {[playerInfo.bowl ? playerInfo.bowl : "No bowling style"]}
            </p>
            <div className="detail">
              <FontAwesomeIcon icon={faBaby} className="info-icon" />
              <p>Date Of Birth: {playerInfo.DoB}</p>
            </div>
            <div className="detail">
              <FontAwesomeIcon icon={faHouse} className="info-icon" />
              <p>Place Of Birth: {playerInfo.birthPlace}</p>
            </div>
            <div className="detail">
              <FontAwesomeIcon icon={faRuler} className="info-icon" />
              <p>Height: {playerInfo.height}</p>
            </div>
          </div>
        </div>
        <div className="player-bio">
          <h2 className="player-bio">Player Bio</h2>
          <p>{bioInfo}</p>
        </div>
      </div>
      <div>
        <h3 className="you-tube-title"> Check out videos of {playerInfo.name}</h3>
      </div>
      <div className="you-tube-cards">
        {[
          !youTubeInfo
            ? "Fetching YouTube Videos"
            : youTubeInfo.map((video) => (
                <VideoCard thumbnail={[video.thumbnails ? video.thumbnails[0].url : ""]} videoUrl={video.url} title={video.title} key={video.id} />
              )),
        ]}
      </div>
    </div>
  );
};

export default PlayerInfo;
