import React from 'react';

function Avatar({image, isNew}) {
  return (
    <div className="avatar">
      <img src={image} alt="image" className="photo" />
      {isNew && <span className="new">NEW</span>}
    </div>
  );
}

export default Avatar;