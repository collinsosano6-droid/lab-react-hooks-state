import React from 'react'

// Receives the cart items from App
const Cart = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* One <li> per item. index is the key because the same
            product can be added more than once. */}
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} is in your cart.</li>
        ))}
      </ul>

      {/* Optional: empties the cart */}
      {/* <button onClick={() => setCartItems([])}>Clear Cart</button> */}
    </div>
  )
}

export default Cart