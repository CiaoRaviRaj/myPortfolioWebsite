import React from "react";

import "./Services.css";

import BrushIcon from '@mui/icons-material/Brush';
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SupportIcon from '@mui/icons-material/Support';


function Services() {
  return (
    <section id="services">
      <div className="services__container">
        <div  className="services__heading">
          <h2>Services</h2>
          <div className="underLine"></div>
        </div>

        <div className="services__row">
          <div className="Services__grid  LineOne">
            <div className="items item1">
              <div class="service-item-icon">
                <BrushIcon className="services__icon" />
              </div>
              <div className="services__discription">
                <div class="service-item-title">
                  <h3>Web Design</h3>
                </div>

                <div class="service-item-desc">
                  <p>euiweorhhewuhuiohWHUFOEUBH</p>
                </div>
              </div>
              

            </div>

            
            <div className="items item2">
              <div className="service-item-icon">
                <LaptopIcon className="services__icon" />
              </div>

              <div className="service-item-title">
                <h3>WEB DEVELOPMENT</h3>
              </div>

              <div className="service-item-desc">
                <p>euiweorhhewuhuiohWHUFOEUBH</p>
              </div>
            </div>
            <div className="items item3">
              <div className="service-item-icon">
                <PhoneIphoneIcon className="services__icon" />
              </div>

              <div className="service-item-title">
                <h3>Mobile Application</h3>
              </div>

              <div className="service-item-desc">
                <p>euiweorhhewuhuiohWHUFOEUBH</p>
              </div>
            </div>
          </div>

          <div className="Services__grid grid__lineTwo">
            <div className="items item4">
              <div className="service-item-icon">
                <SearchIcon className="services__icon" />
              </div>

              <div className="service-item-title">
                <h3>Seo Opimisation</h3>
              </div>

              <div className="service-item-desc">
                <p>euiweorhhewuhuiohWHUFOEUBH</p>
              </div>
            </div>

            <div className="items item5">
              <div className="service-item-icon">
                <BorderColorIcon className="services__icon" />
              </div>

              <div className="service-item-title">
                <h3>UX Design</h3>
              </div>

              <div className="service-item-desc">
                <p>euiweorhhewuhuiohWHUFOEUBH</p>
              </div>
            </div>
            <div className="items item6">
              <div className="service-item-icon">
                <SupportIcon className="services__icon" />
              </div>

              <div class="service-item-title">
                <h3>Support</h3>
              </div>

              <div className="service-item-desc">
                <p>euiweorhhewuhuiohWHUFOEUBH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
