import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img}/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/4338/4338829.svg?token=exp=1660312785~hmac=e5205a9529ae9322e8b458f88c1c36e1"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/4338/4338830.svg?token=exp=1660312953~hmac=2e7b61715d3c58f5f7fe41bb033434a2"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/3917/3917242.svg?token=exp=1660312984~hmac=9f66c819688be2092ee13933f9c46fca"
              onClick={() => onDeleteProduct(product.id)}
            />
            
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;