import {NavLink} from 'react-router-dom';

const Pagination = (props) => {
  const {activePage, pageCount, pageRoute} = props;

  const previousPage = (activePage > 1) ? pageRoute + (activePage - 1) : null;
  const nextPage = (activePage < pageCount && pageCount > 1) ? pageRoute + (activePage + 1) : null;

  return (
    <div className="d-flex justify-content-between mt-5">
      {previousPage
        ? <NavLink className="btn btn-secondary btn-lg" to={previousPage}>Previous</NavLink>
        : <div></div>
      }
      {nextPage
        ? <NavLink className="btn btn-primary btn-lg" to={nextPage}>Next</NavLink>
        : <div></div>
      }
    </div>
  );
}

export default Pagination;