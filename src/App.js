import React from 'react';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'; // Import the Cart component
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Store</h1>
        <Cart /> {/* Display the Cart component in the header */}
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
