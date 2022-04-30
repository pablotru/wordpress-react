import {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPage} from '../Actions/DataActions';
import {useParams} from 'react-router-dom';
import {isEmpty} from 'lodash';
import {FRONT_PAGE, WP_TAGLINE} from '../Common/WordPress';
import HelmetTitle from '../Common/HelmetTitle';
import Loading from './Parts/Loading';
import NotFound from './Parts/NotFound';
import PageContent from './Parts/PageContent';

const Page = (props) => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => state.pageReducer);
  const {type, route} = props;
  const currentRoute = route ? route : useParams().route;
  
  const subject = () => {
    if (!loading && !isEmpty(data)) {
      if (FRONT_PAGE === data.slug) {
        return WP_TAGLINE;
      }
      return data.title.rendered
    }
    return null;
  }

  useEffect(() => {
    dispatch(getPage(type, currentRoute));
  }, [currentRoute]);

  return(
    <Fragment>
      <HelmetTitle subject={subject()}/>
      {loading
        ? <Loading/>
        : <Fragment>
          {!isEmpty(data)
            ? <Fragment>
                <PageContent {...data}/>
              </Fragment>
            : <NotFound/>
          }
          </Fragment>
      }
    </Fragment>
  )
}

export default Page;