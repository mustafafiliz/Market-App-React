import React, { Component } from "react";

class SidebarTags extends Component {
  render() {
    return (
      <div className="sidebar__box">
        <h2 className="sidebar__box__title">Brands</h2>
        <div className="sidebar__box__content">
          <div className="sidebar__box__content__search">
            <input
              type="text"
              placeholder="Search Brand"
              className="input--search"
            />
          </div>
          <div className="sidebar__box__content__wrap">
            <div className="sidebar__box__content__group">
              <input type="checkbox" className="input--square" />
              <span className="sidebar__box__content__group__label">
                Price low to high
              </span>
            </div>
            <div className="sidebar__box__content__group">
              <input type="checkbox" className="input--square" />
              <span className="sidebar__box__content__group__label">
                Price low to high
              </span>
            </div>
            <div className="sidebar__box__content__group">
              <input type="checkbox" className="input--square" />
              <span className="sidebar__box__content__group__label">
                Price low to high
              </span>
            </div>
            <div className="sidebar__box__content__group">
              <input type="checkbox" className="input--square" />
              <span className="sidebar__box__content__group__label">
                Price low to high
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SidebarTags;
