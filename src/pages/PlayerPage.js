import React, {useState} from "react";
import Players from "../components/Players/Players";
import Searchbar from "../components/Searchbar/Searchbar";
import Navbar from "../components/Navbar/Navbar";
import { playerData } from "../utils/playerData";
import "./PlayerPage.css";

const PlayerPage = () => {

  return (
    <div>
      <Players />
    </div>
  );
};

export default PlayerPage;