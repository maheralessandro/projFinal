import { Link, Outlet } from "react-router-dom"


const AdminDash = ()=>{

    return(
        <div>
            <h1>admin home page</h1>
            <Link to="/admin/addCat">ADD CATEGORI</Link>
            <Outlet/>
        </div>
    )
}

export default AdminDash