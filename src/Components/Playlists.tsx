import { useState } from 'react';
import Card from "./Card";

const Playlist = () => {
  const [numPlaylists, setNumPlaylists] = useState(6); // initialize with 6 playlists

  const handleAddPlaylist = () => {
    setNumPlaylists(num => num + 1); // increment the number of playlists
  };

  return (
    <div className="margin-top">
      <span>
        <h3 className="greeting mb-1 mt-3">Playlist</h3>
      </span>
      <div>
        <div className="container-fluid">
          <div
            className="row row-cols-sm-2 row-cols-md-3 row-cols-xl-7 g-4"
            id="bottomsiderow"
          >
            {[...Array(numPlaylists)].map((_, index) => (
              <Card key={index} />
            ))}
          </div>
          <button className="btn btn-primary mt-3" onClick={handleAddPlaylist}>
            Add Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
