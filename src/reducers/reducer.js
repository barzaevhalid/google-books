const initialState = {
  books: null,
  loading: true,
  searchBooks: 'all',
  totalItems: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      console.log(action.payload);
      return {
        ...state,
        totalItems: action.payload.totalItems,
        books: action.payload.items,
        loading: false
      };
      case "PENDING": {
        return {
          ...state, 
          loading: true
        }
      }
    case 'CATEGORIES':


      return {
        ...state,
        searchBooks: action.payload,


      };

    default:
      return state;
  }
};
