import React from 'react'

// Receives the state and setter from App (no state of its own)
const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // Flip the value: true becomes false, false becomes true
  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button onClick={handleClick}>
      {/* Text changes depending on the current mode */}
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle