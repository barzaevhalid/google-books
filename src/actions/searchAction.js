export const searchAction = (data) => {

  return { type: 'SEARCH', payload: data };
};
export const categoriesAction = (data) => {

  return { type: 'CATEGORIES', payload: data };
};

export const searchPending = () => {
  return {type: "PENDING"}
}
