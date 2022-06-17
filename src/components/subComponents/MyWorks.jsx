import React from "react";

import "./MyWorks.css";

import PopupImg from "./PopupImg";

function MyWorks() {
  function handleClick(event) {
    const image = event.target.alt;
    console.log(image);
  }

  return (
    <div id="my__works">
      <div className="my__works__container parallex">
        <div className="my__works__heading">
          <h2>MY Works</h2>
          <div className="underLine"></div>
        </div>

        <div className="my__work__rows">
          <div className="row row1">
            <div className="my__work__items">
              <a href="https://afternoon-woodland-45454.herokuapp.com/">
                <img src="./work/1.jpg" alt="#" />
              </a>
            </div>

            <div className="my__work__items">
              <img src="./work/2.jpg" alt="#" />
            </div>

            <div className="my__work__items">
              <img src="./work/3.jpg" alt="#" />
            </div>

            <div className="my__work__items">
              <img src="./work/4.jpg" alt="#" />
            </div>
          </div>

          <div className="row row2">
            <div className="my__work__items">
              <img src="./work/5.jpg" alt="#" />
            </div>

            <div className="my__work__items">
              <img src="./work/6.jpg" alt="#" />
            </div>

            <div className="my__work__items">
              <img src="./work/7.jpg" alt="#" />
            </div>

            <div className="my__work__items">
              <img src="./work/8.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>

      {/* ITEMS SET 1 */}
      {/* item set 2 */}
    </div>
  );
}

export default MyWorks;
