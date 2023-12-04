import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
  
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Menu</p>
        <div className="app__specialMenu_menu_items">
          {data.menu.map((menu, index) => (
            <MenuItem key={menu.title + index} title={menu.title} price={menu.price} tags={menu.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Seasonal Menu</p>
        <div className="app__specialMenu_menu_items">
          {data.seasonal_menu.map((seasonal_menu, index) => (
            <MenuItem key={seasonal_menu.title + index} title={seasonal_menu.title} price={seasonal_menu.price} tags={seasonal_menu.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
