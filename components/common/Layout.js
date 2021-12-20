import NavBar from "./NavBar";
import Footer from "./Footer";
function Layout({children}) {
    return ( 
        <div className="content">
            <NavBar></NavBar>
            { children}
            <Footer></Footer>
        </div>
     );
}

export default Layout;