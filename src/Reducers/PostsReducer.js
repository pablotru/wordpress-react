const DefaultState = {
  loading: true,
  data: [],
  error: null
}

const PostsReducer = (state = DefaultState, action) => {
  switch(action.type){
    case 'POSTS_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'POSTS_FAIL':
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