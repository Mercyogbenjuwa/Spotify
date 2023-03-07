import Card from "./Card";

const Favourite = () => {
  return (
    <div className="margin-top">
      <span>
        <h3 className="greeting mb-1 mt-3">Favourites</h3>
      </span>
      <div>
        <div className="container-fluid">
          <div
            className="row row-cols-sm-2 row-cols-md-3 row-cols-xl-7 g-4"
            id="bottomsiderow"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
