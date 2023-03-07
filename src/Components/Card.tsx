const Card = () => {
  return (
    <div>
      <div className="col-xl-2 transition-play">
        <div className="card" id="darker">
          <img
            src="https://i.pinimg.com/originals/45/22/8f/45228f8cd8ac51b0db4e1b64e5db2a4c.jpg"
            className="card-img-top p-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Chill</h5>
            <div className="d-flex align-items-baseline justify-content-between">
              <p className="card-text">Chill lofi hip-hop mix.</p>
              <i className="fa-solid fa-play 2-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

