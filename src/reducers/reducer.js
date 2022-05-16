const initialState = {
  books: null,
  loading: false,
  searchBooks: 'all',
  totalItems: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        totalItems: action.payload.totalItems,
        books: action.payload.items
      };
    case 'CATEGORIES':
      return {
        ...state,
        searchBooks: action.payload,


      };
    default:
      return state;
  }
};
