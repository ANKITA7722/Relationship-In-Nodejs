import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> ||
        <Link to="insert">Insert</Link> ||
        <Link to="display">Display</Link>
        <hr size="5" color="red" />
        <Outlet/> 
        <hr size="5" color="red" />
        www.company.com
        </>
    )
}
export default Layout;