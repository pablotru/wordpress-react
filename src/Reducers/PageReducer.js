const DefaultState = {
  loading: true,
  data: [],
  error: null
}

const PageReducer = (state = DefaultState, action) => {
  switch(action.type){
    case 'PAGE_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'PAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'PAGE_FAIL':
      return {
        ...state,
        loading: false,
        error: 'trouble connecting to server'
      }
    default:
      return state;
  }
}

export default PageReducer;