import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class SidebarBrands extends Component {
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
function mapStateToProps(state) {
  return {
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBrands);
