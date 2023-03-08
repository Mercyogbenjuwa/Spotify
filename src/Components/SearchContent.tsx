import { useState } from 'react';

type SearchResult = {
  track: {
    key: string;
    images: {
      coverarthq: string;
    };
    title: string;
    subtitle: string;
  };
};

const SearchContent = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const apiUrl = `https://shazam.p.rapidapi.com/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2ea7851fe1mshc1cb84e411f367dp12dcc9jsn838701b3b470',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(response => setSearchResults(response.tracks.hits))
      .catch(err => console.error(err));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  

  return (
    <div>
      <div className="container-fluid">
        <h3 className="greeting mb-3 mt-3">Search Music</h3>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search music" value={searchTerm} onChange={handleChange} />
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="row row-cols-sm-6 g-3" id="midsidecards">
        {searchResults.map(result => (
          <div className="col-2" key={result.track.key}>
            <div className="card" id="darker">
              <img
                src={result.track.images.coverarthq || 'https://via.placeholder.com/300x300.png?text=No+Image'}
                className="img-fluid rounded-start p-2"
                alt="..."
              />
              <div className="card-body">
              <h5 className="card-title">{result.track.title.length > 20 ? result.track.title.substring(0, 20) + '...' : result.track.title}</h5>
<p className="card-text">{result.track.subtitle.length > 30 ? result.track.subtitle.substring(0, 30) + '...' : result.track.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchContent;

