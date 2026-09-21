import React from 'react';
import { useState } from 'react';

export default function IceCreamCard(props) {

  const [modal, setModal] = useState(false);

  const [size, setSize] = useState('single');
  const [spoon, setSpoon] = useState('1');
  const [dryIce, setDryIce] = useState('none');


  /* 사이즈 추가 금액 */

  let sizePrice = 0;

  if (size === 'double') {
    sizePrice = 1500;
  }

  if (size === 'triple') {
    sizePrice = 2500;
  }


  /* 최종 금액 */

  const totalPrice = props.product.price + sizePrice;


  /* 모달 닫기 */

  const closeModal = () => {

    setModal(false);

    setSize('single');
    setSpoon('1');
    setDryIce('none');

  };


  /* 장바구니 담기 */

  const addCart = () => {

    const selectedProduct = {
      ...props.product,

      size: size,
      spoon: spoon,
      dryIce: dryIce,

      price: totalPrice
    };


    props.setSelected([
      ...props.selected,
      selectedProduct
    ]);


    setModal(false);

    setSize('single');
    setSpoon('1');
    setDryIce('none');

  };


  return (
    <>

      {/* =========================
          PRODUCT CARD
      ========================= */}

      <div className="menu_item">

        <div className="icecream_image">

          {
            props.product.badge &&
            <span
              className={`menu_badge ${props.product.badge.toLowerCase()}`}
            >
              {props.product.badge}
            </span>
          }

          <img
            src={props.product.image}
            alt={props.product.name}
          />

        </div>


        <h2>
          {props.product.name}
        </h2>


        <p>
          {props.product.flavor}
        </p>


        <strong>
          {props.product.price.toLocaleString()}원
        </strong>


        <button
          onClick={() => {
            setModal(true);
          }}
        >
          선택하기
        </button>

      </div>



      {/* =========================
          PRODUCT DETAIL MODAL
      ========================= */}

      {
        modal === true &&

        <div className="product_modal">

          <div className="product_modal_box">


            {/* 닫기 */}

            <button
              className="product_modal_close"
              onClick={closeModal}
            >
              ×
            </button>



            {/* =========================
                LEFT
            ========================= */}

            <div className="product_modal_left">


              {/* 상품 이미지 */}

              <div className="product_modal_image">

                <img
                  src={props.product.image}
                  alt={props.product.name}
                />

              </div>



              {/* 상품 설명 */}

              <div className="product_description">

                <span>
                  MENU DESCRIPTION
                </span>

                <h3>
                  {props.product.name}
                </h3>

                <p>
                  {props.product.description}
                </p>

              </div>

            </div>



            {/* =========================
                RIGHT
            ========================= */}

            <div className="product_modal_right">


              {/* 상품명 / 가격 */}

              <div className="product_modal_title">

                <span>
                  {props.product.flavor}
                </span>

                <h2>
                  {props.product.name}
                </h2>

                <strong>
                  {props.product.price.toLocaleString()}원
                </strong>

              </div>



              {/* =========================
                  SIZE
              ========================= */}

              <div className="product_option">

                <span>
                  01
                </span>

                <div>

                  <h3>
                    SIZE
                  </h3>

                  <p>
                    원하는 사이즈를 선택해주세요.
                  </p>

                </div>

              </div>


              <div className="option_preview">


                {/* SINGLE */}

                <button
                  className={
                    size === 'single'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSize('single');
                  }}
                >

                  <strong>
                    Single
                  </strong>

                  <span>
                    기본
                  </span>

                </button>



                {/* DOUBLE */}

                <button
                  className={
                    size === 'double'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSize('double');
                  }}
                >

                  <strong>
                    Double
                  </strong>

                  <span>
                    +1,500원
                  </span>

                </button>



                {/* TRIPLE */}

                <button
                  className={
                    size === 'triple'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSize('triple');
                  }}
                >

                  <strong>
                    Triple
                  </strong>

                  <span>
                    +2,500원
                  </span>

                </button>

              </div>



              {/* =========================
                  SPOON
              ========================= */}

              <div className="product_option">

                <span>
                  02
                </span>

                <div>

                  <h3>
                    SPOON
                  </h3>

                  <p>
                    필요한 스푼 개수를 선택해주세요.
                  </p>

                </div>

              </div>


              <div className="option_preview">


                <button
                  className={
                    spoon === '0'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSpoon('0');
                  }}
                >
                  없음
                </button>


                <button
                  className={
                    spoon === '1'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSpoon('1');
                  }}
                >
                  1개
                </button>


                <button
                  className={
                    spoon === '2'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSpoon('2');
                  }}
                >
                  2개
                </button>


                <button
                  className={
                    spoon === '3'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setSpoon('3');
                  }}
                >
                  3개
                </button>

              </div>



              {/* =========================
                  TAKE OUT TIME
              ========================= */}

              <div className="product_option">

                <span>
                  03
                </span>

                <div>

                  <h3>
                    TAKE OUT TIME
                  </h3>

                  <p>
                    이동시간에 맞춰 드라이아이스를 준비해드려요.
                  </p>

                </div>

              </div>


              <div className="option_preview">


                {/* 바로 먹기 */}

                <button
                  className={
                    dryIce === 'none'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setDryIce('none');
                  }}
                >

                  <strong>
                    바로 먹기
                  </strong>

                  <span>
                    드라이아이스 없음
                  </span>

                </button>



                {/* 30분 */}

                <button
                  className={
                    dryIce === '30'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setDryIce('30');
                  }}
                >

                  <strong>
                    30분
                  </strong>

                  <span>
                    기본 포장
                  </span>

                </button>



                {/* 1시간 */}

                <button
                  className={
                    dryIce === '60'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setDryIce('60');
                  }}
                >

                  <strong>
                    1시간
                  </strong>

                  <span>
                    드라이아이스 포장
                  </span>

                </button>

              </div>



              {/* =========================
                  TOTAL / CART
              ========================= */}

              <div className="product_modal_bottom">


                {/* 총 금액 */}

                <div>

                  <span>
                    TOTAL
                  </span>

                  <strong>
                    {totalPrice.toLocaleString()}원
                  </strong>

                </div>



                {/* 장바구니 */}

                <button
                  onClick={addCart}
                >

                  장바구니 담기

                  <span>
                    →
                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>
      }

    </>
  );
}