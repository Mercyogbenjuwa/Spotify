import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import Playlists from './Pages/Playlists';
import Favourites from './Pages/Favourites';
import UseAuth from './Components/UseAuth';
import Public from './Pages/Public';

const App = () => {
  const isLogin = UseAuth();
  return (
    <Router>
      {isLogin ? (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/playlists" element={<Playlists/>} />
          <Route path="/favourites" element={<Favourites/>} />
        </Routes>
      ) : (
        <Public />
      )}
      {/* {!isLogin && <Navigate to="/" />} */}
    </Router>
  );
};

export default App;
