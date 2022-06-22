let products = [
  {
    id: 1,
    name: "Áo Sơ Mi",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],

    price: 360000,
    rating: 4.4,
    sizes: ["M", "L", "XL"],
    description: "Mô tả 1",
  },
  {
    id: 2,
    name: "Blazer",
    images: [
      "https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 460000,
    rating: 4.7,
    sizes: ["M", "L", "XL"],
    description: "Mô tả 1 ",
  },
  {
    id: 3,
    name: "Bra",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 290000,
    rating: 5,
    sizes: ["M", "L", "XL"],
    description: "Mô tả 1",
  },
  {
    id: 4,
    name: "Áo Phông",
    images: [
      "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 160000,
    rating: 4.5,
    sizes: ["M", "L", "XL"],
    description: "Mô tả 1",
  },
  {
    id: 5,
    name: "Hodie",
    images: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    ],
    price: 360000,
    rating: 4.5,
    sizes: ["M", "L", "XL"],
    description: "Mô tả 1",
  },
];

const vouchers = {
  "Off10": 0.1,
  "Off25": 0.25,
  "Techmaster50": 0.5,
}
