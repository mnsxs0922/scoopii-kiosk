import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment(props) {

  const navigate = useNavigate();

  const [payment, setPayment] = useState('');
  const [pointSave, setPointSave] = useState(false);
  const [phone, setPhone] = useState('');

  const totalPrice = props.selected.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  const point = Math.floor(totalPrice * 0.01);

  return (
    <div className="payment">

      <h1>PAYMENT</h1>
      <p>결제 방법을 선택해주세요.</p>

      <div className="payment_box">

        <div className="payment_total">
          <span>결제 금액</span>
          <strong>{totalPrice.toLocaleString()}원</strong>
        </div>

        <div className="payment_method">

          <button
            className={payment === 'card' ? 'active' : ''}
            onClick={() => setPayment('card')}
          >
            💳
            <span>신용카드</span>
          </button>

          <button
            className={payment === 'cash' ? 'active' : ''}
            onClick={() => setPayment('cash')}
          >
            💵
            <span>현금</span>
          </button>

        </div>

        <div className="payment_selected">
          {
            payment === ''
              ? '결제 방법을 선택해주세요.'
              : payment === 'card'
              ? '신용카드를 선택했습니다.'
              : '현금을 선택했습니다.'
          }
        </div>

        <div className="point_box">

          <h2>포인트 적립</h2>

          <p>
            결제 금액의 1%가 적립됩니다.
          </p>

          <div className="point_buttons">

            <button
              className={pointSave === true ? 'active' : ''}
              onClick={() => setPointSave(true)}
            >
              포인트 적립
            </button>

            <button
              className={pointSave === false ? 'active' : ''}
              onClick={() => setPointSave(false)}
            >
              적립 안 함
            </button>

          </div>

          {
            pointSave === true &&
            <div className="phone_box">

              <input
                type="text"
                placeholder="휴대폰 번호를 입력해주세요."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <p>
                예상 적립 포인트
                <strong> {point.toLocaleString()}P</strong>
              </p>

            </div>
          }

        </div>

      </div>

      <div className="payment_buttons">

        <button
          className="payment_back"
          onClick={() => navigate('/order')}
        >
          이전으로
        </button>

       <button
  className="payment_next"
  onClick={() => {
    navigate('/complete', {
      state: {
        payment: payment,
        point: point,
        pointSave: pointSave
      }
    });
  }}
>
  결제하기
</button>

      </div>

    </div>
  );
}

export default Payment;