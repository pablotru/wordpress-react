import {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getPosts} from '../Actions/DataActions';
import {isEmpty} from 'lodash';
import {FRONT_PAGE, WP_TAGLINE, BLOG_ROUTE} from '../Common/WordPress';
import HelmetTitle from '../Common/HelmetTitle';
import Loading from './Parts/Loading';
import Posts from './Parts/Posts';
import Pagination from './Parts/Pagination';
import NotFound from './Parts/NotFound';

const PostsPage = (props) => {
  const dispatch = useDispatch();
  const {data, loading, headers} = useSelector((state) => state.postsReducer);
  const {taxonomy, taxonomyID, route} = props;
  const {pageNumber} = useParams();
  const activePage = parseInt(pageNumber) ? parseInt(pageNumber) : 1;
  const pageRoute = route ? `${route}/`: `${BLOG_ROUTE}/`;
  const pageCount = headers ? headers['x-wp-totalpages'] : null;

  const subject = () => {
    if (!FRONT_PAGE && !(taxonomyID)) {
      return WP_TAGLINE;
    }
    return pageTitle();
  }

  const pageTitle = () => {
    if (taxonomyID) {
      const taxonomyTitle = taxonomy.list[taxonomyID].name;
      return `${taxonomy.label}: ${taxonomyTitle}`;
    }
    return 'Posts';
  }

  useEffect(() => {
    dispatch(getPosts(activePage, taxonomy, taxonomyID));
  }, [activePage, taxonomyID]);

  return(
    <Fragment>
      <HelmetTitle subject={subject()}/>
      {loading
        ? <Loading />
        : <Fragment>
            {!isEmpty(data)
              ? <Fragment>
                  <Posts pageTitle={pageTitle()} data={data}/>
                  <Pagination activePage={activePage} pageCount={pageCount} pageRoute={pageRoute}/>
                </Fragment>
              : <NotFound/>
            }
          </Fragment>
      }
    </Fragment>
  )
}

export default PostsPage;