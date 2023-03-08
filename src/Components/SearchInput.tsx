import SearchContent from "./SearchContent";
const SearchInput = () => {
  return (
    <div>
      {/* <nav className="navbar sticky-top mb-3">
        <div className="d-flex align-items-center">
          <div>
            <span>
              <i className="fa-solid fa-chevron-left chevrons"></i>
              <i className="fa-solid fa-chevron-right chevrons"></i>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="mx-4 form-control"
              id="floatingInput"
              placeholder="Search!"
            />
          </div>
        </div>
      </nav> */}
      <SearchContent />
      <div className="container-fluid d-flex" id="containerofsearch"></div>
    </div>
  );
};

export default SearchInput;
