const gifUrls = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GIF':
      return action.payload.map((val, index) => (localStorage.getItem(index)
        ? JSON.parse(localStorage.getItem(index))
        : val));
    case 'SORT_GIF':
      if (action.payload) {
        return [...state.sort((a, b) => new Date(a.import_datetime) - new Date(b.import_datetime))];
      }
      return [...state.sort((a, b) => new Date(b.import_datetime) - new Date(a.import_datetime))];
    default:
      return state;
  }
};

export default gifUrls;
