import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      mug: "mug",
      shirt: "shirt",
    };
  }

  changeType = type => {
    this.props.actions.getProducts(type);
    if (type === this.state.mug) {
      this.setState({ active: this.state.mug });
    } else if (type === this.state.shirt) {
      this.setState({ active: this.state.shirt });
    }
  };

  render() {
    const { active, mug, shirt } = this.state;
    return (
      <div className="product__filter">
        <span
          onClick={() => this.changeType(mug)}
          className={
            active === mug
              ? "product__filter__label product__filter__label--active"
              : "product__filter__label"
          }
        >
          {mug}
        </span>
        <span
          onClick={() => this.changeType(shirt)}
          className={
            active === shirt
              ? "product__filter__label product__filter__label--active"
              : "product__filter__label"
          }
        >
          {shirt}
        </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
