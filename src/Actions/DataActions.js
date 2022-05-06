import axios from 'axios';
import {POSTS_PER_PAGE, REST_ROUTE} from '../Common/WordPress';

export const getPosts = (activePage, taxonomy=null, taxonomyID=null) => async dispatch => {
  try {
    dispatch({
      type: 'POSTS_LOADING'
    });

    const postTaxonomy = taxonomy && taxonomyID ? `&${taxonomy.param}=${taxonomyID}` : '';
    const offset = (activePage - 1) * POSTS_PER_PAGE;
    const url = `${REST_ROUTE}/posts/?per_page=${(POSTS_PER_PAGE + 1)}&offset=${offset}${postTaxonomy}`;

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

    const offset = (activePage - 1) * POSTS_PER_PAGE;
    const url = `${REST_ROUTE}/search/?search=${query}&per_page=${(POSTS_PER_PAGE + 1)}&offset=${offset}`;

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
    
    const url = `${REST_ROUTE}/${type.param}/?slug=${route}`;

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