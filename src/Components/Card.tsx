import { useState, useEffect, useMemo } from "react";

interface TrackInfo {
  title: string;
  artist: string;
  image: string;
}

const Card = () => {
  const [trackInfo, setTrackInfo] = useState<TrackInfo>({
    title: "",
    artist: "",
    image:
      "https://i.pinimg.com/originals/45/22/8f/45228f8cd8ac51b0db4e1b64e5db2a4c.jpg",
  });

  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2ea7851fe1mshc1cb84e411f367dp12dcc9jsn838701b3b470",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    }),
    []
  );

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(
          "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US",
          options
        );
        const data = await response.json();

        if (data.tracks && data.tracks.length > 0) {
          const track = data.tracks[0];
          setTrackInfo({
            title: track.title,
            artist: track.subtitle,
            image:
              track.images.coverarthq ||
              "https://i.pinimg.com/originals/45/22/8f/45228f8cd8ac51b0db4e1b64e5db2a4c.jpg",
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    const delay = 1000 / 5;
    const interval = setInterval(fetchTrack, delay);

    return () => clearInterval(interval);
  }, [options]);

  return (
    <div>
      {trackInfo ? (
        <div className="col-xl-2 transition-play">
          <div className="card" id="darker">
            <img src={trackInfo.image} className="card-img-top p-2" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{trackInfo.title}</h5>
              <div className="d-flex align-items-baseline justify-content-between">
                <p className="card-text">{trackInfo.artist}</p>
                <i className="fa-solid fa-play 2-xl"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
