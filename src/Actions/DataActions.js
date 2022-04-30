import axios from 'axios';
import {POSTS_PER_PAGE} from '../Common/WordPress';

export const getPosts = (activePage, taxonomy=null, taxonomyID=null) => async dispatch => {
  try {
    dispatch({
      type: 'POSTS_LOADING'
    });

    const postTaxonomy = taxonomy && taxonomyID ? `&${taxonomy.param}=${taxonomyID}` : '';
    const url = `/wp-json/wp/v2/posts/?per_page=${(POSTS_PER_PAGE + 1)}&page=${activePage}${postTaxonomy}`;

    await axios.get(url).then((re) => {
      const payload = re.data;
      
      dispatch({
        type: 'POSTS_SUCCESS',
        payload: payload
      });
    });

  } catch(e) {
    dispatch({
      type: 'POSTS_FAIL'
    });
  }
}

export const getSearch = (activePage, query) => async dispatch => {
  try {
    dispatch({
      type: 'SEARCH_LOADING'
    });

    const url = `/wp-json/wp/v2/search/?search=${query}&per_page=${(POSTS_PER_PAGE + 1)}&page=${activePage}`;

    await axios.get(url).then((re) => {
      const payload = re.data;

      dispatch({
        type: 'SEARCH_SUCCESS',
        payload: payload
      });
    });

  } catch(e) {
    dispatch({
      type: 'SEARCH_FAIL'
    });
  }
}

export const getPage = (type, route) => async dispatch => {
  try {
    dispatch({
      type: 'PAGE_LOADING'
    });
    
    const url = `/wp-json/wp/v2/${type.param}/?slug=${route}`;

    await axios.get(url).then((re) => {
      const payload = re.data ? re.data[0] : null;

      dispatch({
        type: 'PAGE_SUCCESS',
        payload: payload
      });
    });

  } catch(e) {
    dispatch({
      type: 'PAGE_FAIL',
      payload: null
    });
  }
}