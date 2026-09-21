import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Order(props) {

  const navigate = useNavigate();

  const [openIndex, setOpenIndex] = useState(null);


  /* 총 금액 */

  const totalPrice = props.selected.reduce((sum, product) => {
    return sum + product.price;
  }, 0);


  /* 옵션 열기 / 닫기 */

  const toggleOption = (index) => {

    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }

  };


  /* 사이즈 한글 표시 */

  const getSize = (size) => {

    if (size === 'single') {
      return 'Single';
    }

    if (size === 'double') {
      return 'Double';
    }

    if (size === 'triple') {
      return 'Triple';
    }

    return '-';

  };


  /* 이동시간 표시 */

  const getDryIce = (dryIce) => {

    if (dryIce === 'none') {
      return '바로 먹기';
    }

    if (dryIce === '30') {
      return '30분 / 기본 포장';
    }

    if (dryIce === '60') {
      return '1시간 / 드라이아이스 포장';
    }

    return '-';

  };


  return (
    <div className="order">

      <div className="order_title">

        <span>YOUR ORDER</span>

        <h1>
          주문을 확인해주세요.
        </h1>

        <p>
          선택한 메뉴와 옵션을 확인한 후 결제를 진행해주세요.
        </p>

      </div>


      {/* =========================
          ORDER LIST
      ========================= */}

      <div className="order_list">

        {
          props.selected.length === 0
            ?

            <div className="order_empty">

              <span>🍨</span>

              <h2>
                장바구니가 비어있어요.
              </h2>

              <p>
                원하는 메뉴를 먼저 선택해주세요.
              </p>

            </div>

            :

            props.selected.map((product, index) => {

              return (

                <div
                  className="order_item"
                  key={index}
                >


                  {/* 상품 기본 정보 */}

                  <div className="order_item_main">


                    {/* 이미지 */}

                    <div className="order_item_image">

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>


                    {/* 이름 */}

                    <div className="order_item_info">

                      <span>
                        {product.flavor}
                      </span>

                      <h2>
                        {product.name}
                      </h2>

                    </div>


                    {/* 가격 */}

                    <strong className="order_item_price">

                      {product.price.toLocaleString()}원

                    </strong>


                    {/* CHEVRON */}

                    <button
                      className={
                        openIndex === index
                          ? 'order_chevron active'
                          : 'order_chevron'
                      }
                      onClick={() => {
                        toggleOption(index);
                      }}
                    >
                      ⌄
                    </button>

                  </div>



                  {/* =========================
                      OPTION DETAIL
                  ========================= */}

                  {
                    openIndex === index &&

                    <div className="order_option_detail">


                      <div>

                        <span>
                          SIZE
                        </span>

                        <strong>
                          {getSize(product.size)}
                        </strong>

                      </div>


                      <div>

                        <span>
                          SPOON
                        </span>

                        <strong>
                          {
                            product.spoon === '0'
                              ? '없음'
                              : `${product.spoon}개`
                          }
                        </strong>

                      </div>


                      <div>

                        <span>
                          TAKE OUT
                        </span>

                        <strong>
                          {getDryIce(product.dryIce)}
                        </strong>

                      </div>

                    </div>
                  }

                </div>

              );

            })
        }

      </div>



      {/* =========================
          TOTAL
      ========================= */}

      {
        props.selected.length > 0 &&

        <div className="order_total">

          <span>
            TOTAL
          </span>

          <strong>
            {totalPrice.toLocaleString()}원
          </strong>

        </div>
      }



      {/* =========================
          BUTTON
      ========================= */}

      <div className="order_buttons">

        <button
          className="back_button"
          onClick={() => {
            navigate('/menu');
          }}
        >
          메뉴로 돌아가기
        </button>


        {
          props.selected.length > 0 &&

          <button
            className="payment_button"
            onClick={() => {
              navigate('/payment');
            }}
          >
            결제하러 가기
          </button>
        }

      </div>

    </div>
  );
}

export default Order;