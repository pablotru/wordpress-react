import {NavLink} from 'react-router-dom';
import {isEmpty} from 'lodash';
import {TAG_TYPE, CATEGORY_TYPE, POSTS_PER_PAGE, PERMALINK_ROUTE} from '../../Common/WordPress';
import PostDate from '../../Common/PostDate';
import Taxonomies from './Taxonomies';

const Posts = (props) => {
  const data = props.data.slice(0,(POSTS_PER_PAGE - 1));
  const {pageTitle} = props;

  return(
    <div className="posts">
      <h2 className="text-capitalize">{pageTitle}</h2>
      {data.map((post) => {
        const {title, excerpt, slug, date, tags, categories} = post;
        const postLink = `${PERMALINK_ROUTE}/${slug}`;

        return (
          <div className="card shadow-sm p-3 my-3">
            <h5 className="card-title" dangerouslySetInnerHTML={{__html:title.rendered}}/>
            <div className="text-muted fst-italic mb-2">Posted on {PostDate(date)}</div>
            <p className="card-text mb-1" dangerouslySetInnerHTML={{__html:excerpt.rendered}}/>
            {!isEmpty(tags)
              ? <div className="mb-2">
                  <span>Tags: </span>
                  <Taxonomies list={tags} type={TAG_TYPE}/>
                </div>
              : null
            }
            {!isEmpty(categories)
              ? <div className="mb-2">
                  <span>Categories: </span>
                  <Taxonomies list={categories} type={CATEGORY_TYPE}/>
                </div>
              : null
            }
            <NavLink className="card-link" to={postLink}>Read more</NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;