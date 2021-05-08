import React, { Component } from "react";

class SidebarSorting extends Component {
  render() {
    return (
      <div className="sidebar__box">
        <h2 className="sidebar__box__title">Sorting</h2>
        <div className="sidebar__box__content">
          <div className="sidebar__box__content__group">
            <input type="checkbox" className="input" />
            <span className="sidebar__box__content__group__label">
              Price low to high
            </span>
          </div>
          <div className="sidebar__box__content__group">
            <input type="checkbox" className="input" />
            <span className="sidebar__box__content__group__label">
              Price high to low
            </span>
          </div>
          <div className="sidebar__box__content__group">
            <input type="checkbox" className="input" />
            <span className="sidebar__box__content__group__label">
              New to old
            </span>
          </div>
          <div className="sidebar__box__content__group">
            <input type="checkbox" className="input" />
            <span className="sidebar__box__content__group__label">
              Old to new
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default SidebarSorting;
