import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import PageReducer from './PageReducer';
import SearchReducer from './SearchReducer';

const RootReducer = combineReducers({
  postsReducer: PostsReducer,
  pageReducer: PageReducer,
  searchReducer: SearchReducer
});

export default RootReducer;