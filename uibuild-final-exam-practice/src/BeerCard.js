import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BeerCard = ({ index, beer }) => {
  return (
    <div className="beer-card">
      <div className="number-container">{index}</div>
      <div className="title">{beer.title}</div>
      <div className="title-line"></div>
      <div className="text-sub">
        <div className="sub">{beer.sub}</div>
        <div className="text">{beer.text}</div>
      </div>
      <div className="button">
        <div>details</div>
        <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default BeerCard;
