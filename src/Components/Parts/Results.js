import {NavLink} from 'react-router-dom';
import {POSTS_PER_PAGE} from '../../Common/WordPress';

const Results = (props) => {
  const {query} = props;
  const data = props.data.slice(0,(POSTS_PER_PAGE - 1));

  return(
    <div className="results">
      <p className="h2">Search: {query}</p>
      {data.map((result) => {
        const {title, url} = result;
        const postLink = url.replace(window.location.origin, '');

        return (
          <div className="border-bottom row py-3 px-1 my-3">
            <h5 dangerouslySetInnerHTML={{__html:title}}/>
            <NavLink to={postLink}>Read more</NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Results;