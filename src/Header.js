import React from 'react';
import ShuffleButton from './ShuffleButton';
import SortButton from './SortButton';

const Header = () => (
  <div className="header">
    <p className="logo">TESTHY</p>
    <ShuffleButton />
    <SortButton />
  </div>
);

export default Header;
