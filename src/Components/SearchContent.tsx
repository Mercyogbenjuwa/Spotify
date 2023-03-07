const SearchContent = () => {
  return (
    <div>
      <div className="container-fluid" id="recentsearches">
        <h3 className="greeting mb-3 mt-3">Recent Searches</h3>
        <div className="row row-cols-sm-6 g-3" id="midsidecards">
          <div className="col-2">
            <div className="card" id="darker">
              <img
                src="https://www.fubiz.net/wp-content/uploads/2018/01/01-kendrick-lamar-damn-album-art-2017-billboard-1240.jpg"
                className="img-fluid rounded-start p-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Damn</h5>
                <p className="card-text">Lorem ipsum...</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" id="darker">
              <img
                src="https://media.pitchfork.com/photos/5bcdf9b8a8f1ec1406cb9892/1:1/w_600/Queen_Bohemian%20Rhapsody%20OST.jpg"
                className="img-fluid rounded-start p-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Album</h5>
                <p className="card-text">Lorem ipsum...</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" id="darker">
              <img
                src="https://blog.dozmia.com/content/images/2019/01/Portrait-The-Weeknd.jpg"
                className="img-fluid p-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Artist</h5>
                <p className="card-text">Lorem ipsum...</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card" id="darker">
              <img
                src="https://i.scdn.co/image/ab67706f0000000387bff188c40608c48b82068f"
                className="img-fluid rounded-start p-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mix</h5>
                <p className="card-text">Lorem ipsum...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
