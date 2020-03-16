import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import useSave from './useSave';

const Gif = ({ gifInfo }) => {
  const [lock, handleSave] = useSave(gifInfo, (localStorage.getItem(gifInfo.id) || false));

  return (
    <div className={lock ? 'lock' : 'unlock'} onClick={() => handleSave()}>
      <img src={gifInfo.url} alt="gif" />
      {lock ? (
        <>
          <FontAwesomeIcon icon={faLock} />
          <p>CLICK TO UNLOCK</p>
        </>
      ) : null}
    </div>
  );
};

export default Gif;
