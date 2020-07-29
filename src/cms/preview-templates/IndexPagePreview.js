import React from 'react';

// Leaving this file in here, just in case previews are added in the future.

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <div>Example data</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
