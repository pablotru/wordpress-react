import {NavLink} from 'react-router-dom';
import {POSTS_PER_PAGE} from '../../Common/WordPress';

const Results = (props) => {
  const {query} = props;
  const data = props.data.slice(0,(POSTS_PER_PAGE - 1));

  return(
    <div className="results">
      <p className="h2">Results: {query}</p>
      {data.map((result) => {
        const {title, url} = result;
        const postLink = url.replace(window.location.origin, '');

        return (
          <div className="card shadow-sm p-3 my-3">
            <h5 className="card-title" dangerouslySetInnerHTML={{__html:title}}/>
            <NavLink className="card-link" to={postLink}>Read more</NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Results;