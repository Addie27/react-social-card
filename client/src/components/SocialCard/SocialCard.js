import React from "react";
import "./SocialCard.css";
import Thumbnail from "../Thumbnail";
import Signature from "../Signature";

const SocialCard = () => (
  <div className="social-card">
    <Thumbnail/>

    <div className="middle-writing"> CLICK ME FOR MORE INFO! </div> 

    <Signature/>
    
  </div>
);

export default SocialCard;