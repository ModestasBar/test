import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { sortGifs } from './action';

const SortButton = () => {
  const dispatch = useDispatch();
  const [sortAsc, setSortAsc] = useState(true);

  return (
    <button
      className="button"
      type="button"
      onClick={() => {
        dispatch(sortGifs(sortAsc));
        setSortAsc(!sortAsc);
      }}
    >
        SORT
      {' '}
      {sortAsc ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />}
    </button>
  );
};

export default SortButton;
