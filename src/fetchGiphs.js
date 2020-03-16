import { useDispatch } from 'react-redux';
import { fetchGifUrls } from './action';

export default (APIKEY) => {
  const dispatch = useDispatch();

  const fetchALl = () => Promise.all([
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&rating=G`).then((resp) => resp.json()),
  ])
    .then((data) => {
      const giphData = data.map((giph, id) => {
        const { import_datetime, images } = giph.data;
        return { url: images.downsized_large.url, import_datetime, id };
      });
      dispatch(fetchGifUrls(giphData));
    });

  return [fetchALl];
};
