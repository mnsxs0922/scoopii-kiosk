const productData = [
  {
    id: 1,
    name: "딸기 아이스크림",
    flavor: "Strawberry",
    category: "icecream",
    badge: "BEST",
    description: "상큼한 딸기와 부드러운 우유가 어우러진 달콤하고 산뜻한 아이스크림입니다.",
    price: 4500,
    image: "/images/icecream/strawberry.png"
  },
  {
    id: 13,
    name: "크로플",
    flavor: "Croffle",
    category: "dessert",
    badge: "NEW",
    description: "겉은 바삭하고 속은 쫀득한 크로플에 달콤한 토핑을 더한 디저트입니다.",
    price: 6500,
    image: "/images/dessert/croffle.png"
  },
  {
    id: 2,
    name: "초코 아이스크림",
    flavor: "Chocolate",
    category: "icecream",
    description: "진한 초콜릿의 풍미와 부드러운 식감을 함께 즐길 수 있는 아이스크림입니다.",
    price: 4500,
    image: "/images/icecream/choco.png"
  },
  {
    id: 17,
    name: "딸기 생크림 케이크",
    flavor: "Strawberry Cake",
    category: "cake",
    description: "촉촉한 시트 사이에 부드러운 생크림과 상큼한 딸기를 더한 케이크입니다.",
    price: 6500,
    image: "/images/cake/strawberry.png"
  },
  {
    id: 3,
    name: "바닐라 아이스크림",
    flavor: "Vanilla",
    category: "icecream",
    description: "은은한 바닐라 향과 진한 우유의 풍미를 담은 클래식 아이스크림입니다.",
    price: 4000,
    image: "/images/icecream/vanilla.png"
  },
  {
    id: 14,
    name: "초코 브라우니",
    flavor: "Chocolate Brownie",
    category: "dessert",
    description: "꾸덕한 브라우니에 진한 초콜릿의 달콤함을 가득 담은 디저트입니다.",
    price: 5500,
    image: "/images/dessert/brownie.png"
  },
  {
    id: 4,
    name: "민트초코 아이스크림",
    flavor: "Mint Chocolate",
    category: "icecream",
    description: "상쾌한 민트 아이스크림에 달콤하고 바삭한 초콜릿을 더했습니다.",
    price: 4500,
    image: "/images/icecream/mint.png"
  },
  {
    id: 18,
    name: "초콜릿 케이크",
    flavor: "Chocolate Cake",
    category: "cake",
    badge: "BEST",
    description: "촉촉한 초콜릿 시트와 진한 초콜릿 크림을 층층이 쌓은 케이크입니다.",
    price: 6500,
    image: "/images/cake/choco.png"
  },
  {
    id: 5,
    name: "쿠키앤크림",
    flavor: "Cookies & Cream",
    category: "icecream",
    badge: "BEST",
    description: "부드러운 크림 아이스크림에 바삭한 초콜릿 쿠키 조각을 듬뿍 넣었습니다.",
    price: 5000,
    image: "/images/icecream/cookie.png"
  },
  {
    id: 15,
    name: "티라미수",
    flavor: "Tiramisu",
    category: "dessert",
    description: "향긋한 커피와 부드러운 크림, 쌉싸름한 코코아가 어우러진 디저트입니다.",
    price: 6000,
    image: "/images/dessert/tiramisu.png"
  },
  {
    id: 6,
    name: "망고 아이스크림",
    flavor: "Mango",
    category: "icecream",
    description: "잘 익은 망고의 달콤하고 향긋한 풍미를 시원하게 담은 아이스크림입니다.",
    price: 5000,
    image: "/images/icecream/mango.png"
  },
  {
    id: 19,
    name: "뉴욕 치즈케이크",
    flavor: "Cheese Cake",
    category: "cake",
    badge: "NEW",
    description: "진하고 꾸덕한 크림치즈의 풍미와 고소한 크러스트가 어우러진 케이크입니다.",
    price: 6500,
    image: "/images/cake/cheese.png"
  },
  {
    id: 7,
    name: "피스타치오",
    flavor: "Pistachio",
    category: "icecream",
    description: "고소한 피스타치오의 깊은 풍미와 부드러운 크림의 조화를 담았습니다.",
    price: 5500,
    image: "/images/icecream/pista.png"
  },
  {
    id: 16,
    name: "마카롱 세트",
    flavor: "Macaron",
    category: "dessert",
    description: "바삭하고 쫀득한 꼬끄 사이에 다양한 맛의 크림을 채운 마카롱 세트입니다.",
    price: 5000,
    image: "/images/dessert/macaron.png"
  },
  {
    id: 8,
    name: "블루베리",
    flavor: "Blueberry",
    category: "icecream",
    description: "새콤달콤한 블루베리의 풍미와 부드러운 우유가 어우러진 아이스크림입니다.",
    price: 5000,
    image: "/images/icecream/blueberry.png"
  },
  {
    id: 9,
    name: "솔티드 카라멜",
    flavor: "Salted Caramel",
    category: "icecream",
    description: "달콤한 카라멜에 은은한 짭짤함을 더해 풍미를 살린 아이스크림입니다.",
    price: 5500,
    image: "/images/icecream/caramel.png"
  },
  {
    id: 10,
    name: "말차",
    flavor: "Matcha",
    category: "icecream",
    badge: "NEW",
    description: "쌉싸름하고 향긋한 말차와 부드러운 크림이 조화로운 아이스크림입니다.",
    price: 5000,
    image: "/images/icecream/malcha.png"
  },
  {
    id: 11,
    name: "체리 요거트",
    flavor: "Cherry Yogurt",
    category: "icecream",
    description: "상큼한 요거트에 새콤달콤한 체리의 풍미를 더한 산뜻한 아이스크림입니다.",
    price: 5500,
    image: "/images/icecream/cherry.png"
  },
  {
    id: 12,
    name: "밀크티",
    flavor: "Milk Tea",
    category: "icecream",
    description: "향긋한 홍차와 부드러운 우유의 풍미를 담은 은은하고 달콤한 아이스크림입니다.",
    price: 5000,
    image: "/images/icecream/milktea.png"
  }
];

export default productData;