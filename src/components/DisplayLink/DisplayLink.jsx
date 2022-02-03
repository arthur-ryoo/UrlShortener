import React from 'react';
import { Link } from '@material-ui/core';

const DisplayLink = ({ shortUrl }) => {
  return (
    <>
      <Link rel="noopener" target="_blank" href={`${shortUrl}`}>
        {shortUrl}
      </Link>
    </>
  );
};

export default DisplayLink;
