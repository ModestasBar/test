import { useState } from 'react';

export default (info, initVal) => {
  const [lock, setLock] = useState(initVal);

  const handleSave = () => {
    if (lock) {
      localStorage.removeItem(info.id);
      setLock(false);
    }
    if (!lock) {
      localStorage.setItem(info.id, JSON.stringify(info));
      setLock(true);
    }
  };
  return [lock, handleSave];
};
