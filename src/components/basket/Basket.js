import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions";

class Basket extends Component {
  addToCart = product => {
    this.props.actions.addToCart({ quantity: 1, product });
  };
  increaseCartUnits = product => {
    this.props.actions.increaseCartUnits({ quantity: 1, product });
  };

  removeFromCart = product => {
    this.props.actions.removeFromCart(product);
  };

  renderEmpty() {
    return (
      <div className="basket">
        <h1>Sepetiniz Boş</h1>
      </div>
    );
  }

  renderBasket() {
    return (
      <div className="basket">
        {this.props.cart.map(cartItem => (
          <div className="basket__item" key={cartItem.added}>
            <div className="basket__item__label">
              <h4 className="__basket__item__label__title">
                {cartItem.product.name}
              </h4>
              <div className="basket__item__label__price">
                ₺ {cartItem.product.price}
              </div>
            </div>
            <div className="basket__item__quantity">
              <span
                onClick={
                  cartItem.quantity !== 1
                    ? () => this.increaseCartUnits(cartItem.product)
                    : () => this.removeFromCart(cartItem.product)
                }
                className="basket__item__quantity__decrease"
              >
                -
              </span>
              <span className="basket__item__quantity__number">
                {cartItem.quantity}
              </span>
              <span
                onClick={() => this.addToCart(cartItem.product)}
                className="basket__item__quantity__increase"
              >
                +
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <>
        {this.props.cart.length > 0 ? this.renderBasket() : this.renderEmpty()}
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      increaseCartUnits: bindActionCreators(
        basketActions.increaseCartUnits,
        dispatch
      ),
      removeFromCart: bindActionCreators(
        basketActions.removeFromCart,
        dispatch
      ),
      addToCart: bindActionCreators(basketActions.addToCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.basketReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
