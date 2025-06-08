const infomation = {
  id: "10894",
  name: "Pizza Hut",
  cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  locality: "2nd Stage",
  areaName: "BTM Layout",
  costForTwo: "₹350 for two",
  cuisines: ["Pizzas"],
  avgRating: 4.1,
  parentId: "721",
  avgRatingString: "4.1",
  totalRatingsString: "10K+",
  deliveryTime: 31,
  priceDependTime: {
    Jan: "₹350",
    Feb: "₹450",
    Dec: "₹550",
  },
};

const myJsonString = JSON.stringify(infomation);
console.log(myJsonString);
