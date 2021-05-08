import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as basketActions from "../../redux/actions/basketActions";
import ReactPlaceholder from "react-placeholder";
import ProductFilter from "./ProductFilter";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = product => {
    this.props.actions.addToCart({ quantity: 1, product });
  };

  render() {
    return (
      <div className="product">
        <h2 className="product__title">Product</h2>
        <ProductFilter />
        <div className="product__cards">
          {this.props.products.map(product => (
            <div className="card" key={product.added}>
              <ReactPlaceholder
                type="rect"
                style={{ width: 115, height: 115 }}
                className="card__img"
              >
                <img src="#" alt="api__img" />
              </ReactPlaceholder>
              <h4 className="card__price">₺ {product.price}</h4>
              <h4 className="card__title">{product.name}</h4>
              <div className="card__button">
                <button onClick={() => this.addToCart(product)} className="btn">
                  Add
                </button>
              </div>
            </div>
          ))}
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
      addToCart: bindActionCreators(basketActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
