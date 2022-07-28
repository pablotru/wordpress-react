const DefaultState = {
  loading: true,
  data: [],
  headers: null,
  error: null
}
  
const PostsReducer = (state = DefaultState, action) => {
  switch(action.type){
    case 'SEARCH_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        headers: action.headers
      }
    case 'SEARCH_FAIL':
      return {
        ...state,
        loading: false,
        error: 'trouble connecting to server'
      }
    default:
      return state;
  }
}

export default PostsReducer;