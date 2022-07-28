import {Fragment, useEffect} from 'react';
import {WP_IMAGES} from '../../Common/WordPress';

const FeaturedImage = (props) => {
  const {image} = props;

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

  return (
    <Fragment>
      {image
      ? <div className="row mb-3 px-2">
          <div className="featured-media" style={{
            backgroundImage: `url("${WP_IMAGES[image].guid}")`
          }} />
        </div>
      : null
      }
    </Fragment>
  );
}

export default FeaturedImage;