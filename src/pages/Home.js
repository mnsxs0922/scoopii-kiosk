import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="home">

      <div className="home_header">
        <div className="home_logo">
          SCOOPII
        </div>

        <span className="home_tag">
          ICE CREAM KIOSK
        </span>
      </div>

      <div className="home_visual">

        <div className="home_text">

          <span className="home_small">
            SWEET MOMENTS, ONE SCOOP AT A TIME
          </span>

          <h1>
            Pick your<br />
            <em>sweet moment.</em>
          </h1>

          <p>
            오늘의 기분에 딱 맞는 아이스크림을 골라보세요.<br />
            달콤한 순간이 지금 시작됩니다.
          </p>

          <Link to="/menu">
            <button className="home_order">
              주문 시작하기
              <span>→</span>
            </button>
          </Link>

        </div>

        <div className="home_icecream">

          <div className="home_circle"></div>

          <img
            src="/images/icecream/strawberry.png"
            alt="딸기 아이스크림"
            className="home_icecream_main"
          />

          <div className="home_flavor">
            <span>Today's flavor</span>
            <strong>STRAWBERRY</strong>
          </div>

        </div>

      </div>

      <div className="home_bottom">
        <span>6 FLAVORS</span>
        <span>FRESH & SWEET</span>
        <span>MADE FOR YOUR MOMENT</span>
      </div>

    </div>
  );
}

export default Home;