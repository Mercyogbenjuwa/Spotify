import Sidebar from "../Components/SideBar"
import Playlist from "../Components/Playlists"

const Playlists = () => {
  return (
    <div className="container-fluid p-0">
       <div className="row">
       <div className="col-sm-3">
       <Sidebar/>
       </div>
       <div className='col-sm-8'>
       <Playlist/>
       </div>
    </div>    
    </div>
  )
}

export default Playlists