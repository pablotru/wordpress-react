import {Fragment, useEffect} from 'react';
import {isEmpty} from 'lodash';
import {PAGE_TYPE, TAG_TYPE, CATEGORY_TYPE, WP_IMAGES} from '../../Common/WordPress';
import PostDate from '../../Common/PostDate';
import Taxonomies from './Taxonomies';

const PageContent = (props) => {
  const {title, content, type, date, tags, categories} = props;

  return(
    <Fragment>
      <div className="page">
        <div className="row">
          <h1 dangerouslySetInnerHTML={{__html:title.rendered}}/>
          {type !== PAGE_TYPE.value
            ? <div className="text-muted fst-italic mb-2">Posted on {PostDate(date)}</div>
            : null
          }
          <p dangerouslySetInnerHTML={{__html:content.rendered}}/>
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
        </div>
      </div>
    </Fragment>
  );
}

export default PageContent;