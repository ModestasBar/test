import React from 'react';
import { useSelector } from 'react-redux';
import Gif from './Gif';

const Gifs = () => {
  const gifs = useSelector((state) => state.gifUrls);
  return (
    <div className="content">
      {
        gifs.length > 0
          ? gifs.map((val, index) => <Gif gifInfo={val} key={val.id} id={index} />)
          : <h1>No gifs to show</h1>
      }
    </div>
  );
};

export default Gifs;
