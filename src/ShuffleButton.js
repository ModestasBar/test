import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import fetchGiphs from './fetchGiphs';

const ShuffleButton = () => {
  const APIKEY = '4cfOrO1WYVQW1LnyBp3vLROXFLa2lSyx';
  const [fetchAll] = fetchGiphs(APIKEY);
  useHotkeys('SPACE', () => fetchAll());

  return (
    <button
      className="button"
      type="button"
      onClick={() => fetchAll()}
    >
    PRESS SPACEBAR TO SHUFFLE
    </button>
  );
};

export default ShuffleButton;
