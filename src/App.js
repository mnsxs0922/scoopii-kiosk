import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Complete from './pages/Complete';
function App() {

  const [selected, setSelected] = useState([]);

  return (
    <div className="App">

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/menu'
          element={
            <Menu
              selected={selected}
              setSelected={setSelected}
            />
          }
        />

        <Route
          path='/order'
          element={
            <Order
              selected={selected}
            />
          }
        />

        <Route
          path='/payment'
          element={
            <Payment
              selected={selected}
            />
          }
        />
<Route
  path='/complete'
  element={
    <Complete
      selected={selected}
      setSelected={setSelected}
    />
  }
/>
      </Routes>

    </div>
  );
}

export default App;