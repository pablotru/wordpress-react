import {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams, Navigate} from 'react-router-dom';
import {getSearch} from '../Actions/DataActions';
import {isEmpty} from 'lodash';
import {POSTS_PER_PAGE} from '../Common/WordPress';
import HelmetTitle from '../Common/HelmetTitle';
import Loading from './Parts/Loading';
import Results from './Parts/Results';
import Pagination from './Parts/Pagination';
import NoResults from './Parts/NoResults';

const SearchPage = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.searchReducer);
  const [searchParams] = useSearchParams();
  const query = searchParams.has('q') ? searchParams.get('q') : null;
  if (!query) {
    return <Navigate to="/"/>
  }
  const activePage = searchParams.has('p') ? parseInt(searchParams.get('p')) : 1;
  const currentPage = `/search?q=${query}&p=`
  const previousPage = activePage > 1 ? currentPage + (activePage - 1) : false;
  const nextPage = data.length > POSTS_PER_PAGE ? currentPage + (activePage + 1) : false;
  const subject = `Search: ${query}`;

  useEffect(() => {
    dispatch(getSearch(activePage, query)); 
  }, [activePage, query]);

  return(
    <Fragment>
      <HelmetTitle subject={subject}/>
      {loading
        ? <Loading />
        : <Fragment>
            {!isEmpty(data)
              ? <Fragment>
                  <Results data={data} query={query}/>
                  <Pagination previousPage={previousPage} nextPage={nextPage}/>
                </Fragment>
              : <NoResults query={query}/>
            }
          </Fragment>
      }
    </Fragment>
  );
}

export default SearchPage;