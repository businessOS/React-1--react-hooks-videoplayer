import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const NigthMode = ({ nightModeCallback, nightmode }) => (
  <StyledNightmode>
    <span>Nightmode: </span>
    <label className="switch">
      <input type="checkbox" checked={nightmode} onChange={nightModeCallback} />
      <span className="slider round"></span>
    </label>
  </StyledNightmode>
);

export default NigthMode;
