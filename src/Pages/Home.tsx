import Favourite from '../Components/Favourites'
import Playlist from '../Components/Playlists'
import Sidebar from '../Components/SideBar'

const Home = () => {
  return (
    <div className="container-fluid p-0" >
       <div className="row">
       <div className="col-sm-3">
       <Sidebar/>
       </div>
       <div className='col-sm-8'>
       <Playlist/>
       <Favourite/>
       </div>
    </div>    
    </div>
  )
}

export default Home