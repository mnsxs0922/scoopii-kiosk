import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Complete(props) {

  const navigate = useNavigate();
  const location = useLocation();

  const payment = location.state?.payment;
  const point = location.state?.point || 0;
  const pointSave = location.state?.pointSave;

  const totalPrice = props.selected.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  const goHome = () => {
    props.setSelected([]);
    navigate('/');
  };

  return (
    <div className="complete">

      <div className="complete_box">

        <div className="complete_icon">
          ✓
        </div>

        <h1>결제가 완료되었습니다!</h1>

        <p className="complete_message">
          이용해주셔서 감사합니다.
        </p>

        <div className="complete_info">

          <div>
            <span>결제 금액</span>
            <strong>{totalPrice.toLocaleString()}원</strong>
          </div>

          <div>
            <span>결제 방법</span>
            <strong>
              {payment === 'card' ? '신용카드' : '현금'}
            </strong>
          </div>

          <div>
            <span>포인트 적립</span>
            <strong>
              {pointSave ? `${point.toLocaleString()}P` : '적립 안 함'}
            </strong>
          </div>

        </div>

        <button onClick={goHome}>
          처음으로
        </button>

      </div>

    </div>
  );
}

export default Complete;