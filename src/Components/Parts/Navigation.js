import {Fragment, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {WP_MENU} from '../../Common/WordPress';

const Navigation = (props) => {
  useEffect(() => {
    document.addEventListener('click', (event)  => {
      if (event.target.matches('.dropdown-toggler')) {
        let parent = event.target.parentElement;
        let content = parent.querySelector('.dropdown-content');
        if (content.classList.contains('active')) {
          return content.classList.remove('active');
        }
        return content.classList.add('active');
      }
      return;
    });
  });

  const renderMenu = (menu) => {
    return menu.map((child) => {
      return (
        <Fragment>
          {child.children && child.children.length
            ? <li className="dropdown">
                <span className="dropdown-toggler"></span>
                <NavLink className="dropdown-primary" to={child.url}>{child.title}</NavLink>
                <ul className="dropdown-content">
                  {renderMenu(child.children)}
                </ul>
              </li>
            : <li>
                <NavLink className="dropdown-link" to={child.url}>{child.title}</NavLink>
              </li>
          }
        </Fragment>
      );
    });
  }

  return WP_MENU.map((item) => {
    const {title, url, children} = item;

    return (
      <Fragment>
        {children && children.length
          ? <li className="nav-item dropdown">
            <span className="dropdown-toggler"></span>
              <NavLink className="nav-link dropdown-primary" to={url}>{title}</NavLink>
              <ul className="dropdown-content">
                {renderMenu(children)}
              </ul>
            </li>
          : <li class="nav-item">
              <NavLink className="nav-link" to={url}>{title}</NavLink>
            </li>
        }
      </Fragment>
    );
  });
}

export default Navigation;