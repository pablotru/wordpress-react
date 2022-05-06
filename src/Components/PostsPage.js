import {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getPosts} from '../Actions/DataActions';
import {isEmpty} from 'lodash';
import {POSTS_PER_PAGE, BLOG_ROUTE} from '../Common/WordPress';
import HelmetTitle from '../Common/HelmetTitle';
import Loading from './Parts/Loading';
import Posts from './Parts/Posts';
import Pagination from './Parts/Pagination';
import NotFound from './Parts/NotFound';

const PostsPage = (props) => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.postsReducer);
  const {taxonomy, taxonomyID, route} = props;
  const {pageNumber} = useParams();
  const activePage = parseInt(pageNumber) ? parseInt(pageNumber) : 1;
  const currentRoute = route ? `${route}/`: `${BLOG_ROUTE}/`;
  const previousPage = activePage > 1 ? currentRoute + (activePage - 1) : false;
  const nextPage = data.length > POSTS_PER_PAGE ? currentRoute + (activePage + 1) : false;
  const subject = 'Posts';

  const pageTitle = () => {
    if (taxonomy && taxonomyID) {
      const taxonomyTitle = taxonomy.list[taxonomyID].slug;
      return `${taxonomy.value}: ${taxonomyTitle}`;
    }
    return 'Posts';
  }

  useEffect(() => {
    dispatch(getPosts(activePage, taxonomy, taxonomyID));
  }, [activePage, taxonomyID]);

  return(
    <Fragment>
      <HelmetTitle subject={subject}/>
      {loading
        ? <Loading />
        : <Fragment>
            {!isEmpty(data)
              ? <Fragment>
                  <Posts pageTitle={pageTitle()} data={data}/>
                  <Pagination previousPage={previousPage} nextPage={nextPage}/>
                </Fragment>
              : <NotFound/>
            }
          </Fragment>
      }
    </Fragment>
  )
}

export default PostsPage;