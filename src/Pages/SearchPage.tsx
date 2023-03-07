import Sidebar from "../Components/SideBar"
import SearchInput from "../Components/SearchInput"

const SearchPage = () => {
  return (
    <div className="container-fluid p-0">
       <div className="row">
       <div className="col-sm-4">
       <Sidebar/>
       </div>
       <div className='col-sm-8'>
       <SearchInput/>
       </div>
    </div>    
    </div>
  )
}

export default SearchPage