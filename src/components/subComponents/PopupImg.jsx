import React from 'react';

function PopupImg(props) {
  return (
    <div>
    <div className="popup">
      <span>❌</span>
      <img src={props} />
    </div>
  </div>
  )
}

export default PopupImg;