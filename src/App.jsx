import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css' // makes the dark/light styles work

const App = () => {
  // State for dark mode: false = light, true = dark
  const [darkMode, setDarkMode] = useState(false)

  // State for the cart: an array of product objects
  const [cartItems, setCartItems] = useState([])

  // State for the selected category: 'all', 'Fruits', or 'Dairy'
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Adds a product to the cart.
  // [...cartItems, product] makes a NEW array with the old items plus the new one.
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    // The class changes with darkMode, so the CSS can style the whole app
    <div className={darkMode ? 'app dark' : 'app light'}>
      <h1>🛒 Shopping App</h1>

      {/* Pass the state and its setter down to the toggle button */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category dropdown: onChange updates the selectedCategory state */}
      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* ProductList needs the category (to filter) and the add function */}
      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      {/* Cart needs the items to display */}
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default App