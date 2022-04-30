import {useEffect} from 'react';
import {isEmpty} from 'lodash';
import {PAGE_TYPE, TAG_TYPE, CATEGORY_TYPE, WP_IMAGES} from '../../Common/WordPress';
import PostDate from '../../Common/PostDate';
import Taxonomies from './Taxonomies';

const PageContent = (props) => {
  const {title, content, type, date, tags, categories, featured_media} = props;

  const resizeFeatured = (event) => {
    const featured = document.querySelector('.featured-media');
    if (featured) {
      const featuredWidth = featured.clientWidth;
      const featuredHeight = featuredWidth / (10/3);
      featured.style.height = featuredHeight + 'px';
    } else {
      window.removeEventListener('resize', resizeFeatured, true);
    }
  }

  useEffect(() => {
    resizeFeatured();
    window.addEventListener('resize', resizeFeatured, true);
  }, [props]);

  return(
    <div className="page">
      {featured_media
        ? <div className="row mb-3 px-2">
            <div className="featured-media" style={{
              backgroundImage: `url("${WP_IMAGES[featured_media].guid}")`
            }} />
          </div>
        : null
      }
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
  );
}

export default PageContent;