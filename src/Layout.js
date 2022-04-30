import {Outlet} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const Layout = () => {
  return(
    <div className="wrapper container-fluid p-0">
      <Header/>
      <main className="main container px-3 py-5">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
export default Layout;
