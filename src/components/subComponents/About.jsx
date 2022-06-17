import React from 'react';

import "./About.css";

function About() {
  return (
    <div id="about" className='about parallex'>
        <div className='about__container'>
            <div className='about__cover'>
                <div className='about__discription'>
                    <div className='about__heading'>
                        <h2>About</h2>
                        <div className="underLine"></div>
                    </div>
                    <div className='about__context'>
                        <p>jhfhgdtfhdfghfgdghdfdhfsfdxfgfgf</p>
                    </div>

                    <button className='about__button' href="#my__works">Our Work</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About;