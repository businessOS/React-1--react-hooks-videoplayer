import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NigthMode from "../Nightmode";
import StyledPlayList from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightmode }) => (
  <StyledPlayList>
    <NigthMode nightModeCallback={nightModeCallback} nightmode={nightmode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlayList>
);

export default Playlist;
