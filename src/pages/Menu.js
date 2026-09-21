import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import productData from '../data/product';
import IceCreamCard from '../components/IceCreamCard';

function Menu(props) {

  const navigate = useNavigate();

  const [products] = useState(productData);
  const [category, setCategory] = useState('all');

  const filteredProducts = products.filter((product) => {

    if (category === 'all') {
      return true;
    }

    return product.category === category;

  });

  return (
    <div className="menu">

      <h1>ICE CREAM MENU</h1>
      <p>원하는 메뉴를 선택해주세요.</p>

      <div className="category">

        <button
          className={category === 'all' ? 'active' : ''}
          onClick={() => setCategory('all')}
        >
          ALL
        </button>

        <button
          className={category === 'icecream' ? 'active' : ''}
          onClick={() => setCategory('icecream')}
        >
          ICE CREAM
        </button>

        <button
          className={category === 'dessert' ? 'active' : ''}
          onClick={() => setCategory('dessert')}
        >
          DESSERT
        </button>

        <button
          className={category === 'cake' ? 'active' : ''}
          onClick={() => setCategory('cake')}
        >
          CAKE
        </button>

      </div>

      <div className="cart">
        <span>🛒 장바구니</span>
        <strong>{props.selected.length}개</strong>
      </div>

      <div className="menu_list">

        {
          filteredProducts.map((product, index) => {

            return (
              <IceCreamCard
                key={index}
                product={product}
                selected={props.selected}
                setSelected={props.setSelected}
              />
            )

          })
        }

      </div>

      <button
        onClick={() => {
          navigate('/order');
        }}
      >
        주문 확인
      </button>

    </div>
  );
}

export default Menu;