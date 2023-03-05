import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="navbar-custom d-none d-lg-block d-xl-block d-xxl-block">
      <ul className="navbar-nav">
        <li className="nav-item my-3">
          <div className="text-light heading d-flex align-items-center justify-content-flex-start mt-3">
            <i className="fa-brands fa-spotify mx-3 p-1"></i> Spotify
          </div>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <i className="fa-solid fa-house mx-3"></i>
            <div className="w-75 d-flex">
              <Link className="gotohome" to="/">
                Home
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <i className="fa-sharp fa-solid fa-star mx-3"></i>
            <div className="w-75 d-flex">
              <Link className="gotohome" to="/favourites">
                Favourites
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <i className="fa-solid fa-magnifying-glass mx-3"></i>
            <div className="w-75 d-flex">
              <Link className="gotohome" to="/search">
                Search
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <i className="fa-regular fa-bookmark mx-3"></i>
            <div className="w-75 d-flex">
              <Link className="gotohome" to="/playlists">
                Playlists
              </Link>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
