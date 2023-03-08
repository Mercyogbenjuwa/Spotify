import Sidebar from "../Components/SideBar";
import Favourite from "../Components/Favourites";
const Favourites = () => {
  return (
        <div className="container-fluid p-0">
       <div className="row">
       <div className="col-sm-3">
       <Sidebar/>
       </div>
       <div className='col-sm-8'>
       <Favourite/>
       </div>
    </div>    
    </div>
  )
}

export default Favourites

