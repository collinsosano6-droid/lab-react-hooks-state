import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* On click, send this card's product up to App's handleAddToCart.
          The arrow function makes it run on click, not during rendering. */}
      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
        // Optional: uncomment to block out-of-stock items from being added
        // disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard