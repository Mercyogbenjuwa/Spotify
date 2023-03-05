import Playlists from '../Components/Playlists'
import Sidebar from '../Components/SideBar'

const Home = () => {
  return (
    <div className="container-fluid">
       <div className="row">
       <div className="col-sm-4">
       <Sidebar/>
       </div>
       <div className='col-sm-8'>
       <Playlists/>
       </div>
    </div>    
    </div>
  )
}

export default Home