const fetchGifUrls = (urls) => ({
  type: 'FETCH_GIF',
  payload: urls,
});

const sortGifs = (asc) => ({
  type: 'SORT_GIF',
  payload: asc,
});

export { fetchGifUrls, sortGifs };
