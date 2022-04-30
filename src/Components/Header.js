import {NavLink} from 'react-router-dom';
import Search from './Parts/Search';
import Navigation from './Parts/Navigation';
import {WP_TITLE, WP_MENU} from '../Common/WordPress';

const Header = () => {
  return(
    <header>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark px-3">
          <NavLink className="nav-link navbar-brand p-0" to="/">{WP_TITLE}</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <Navigation menu={WP_MENU}/>
            </ul>
            <Search />
          </div>
      </nav>
    </header>
  )
}

export default Header;