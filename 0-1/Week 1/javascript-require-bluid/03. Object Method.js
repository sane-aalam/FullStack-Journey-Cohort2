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

const resName = infomation["name"];
const cloudinaryImageId = infomation["cloudinaryImageId"];
const deliveryTime = infomation["deliveryTime"];
const LastMonthPrice = infomation.priceDependTime["Dec"];

console.log(resName);
console.log(cloudinaryImageId);
console.log(deliveryTime);
console.log(LastMonthPrice);

// update :
// update the data into the object
infomation.priceDependTime.Jan = "450";

// delete :
// delete the data into the object
// using delete keyword, you can delete the items into the object.

delete infomation.priceDependTime.Jan;

console.log(infomation.priceDependTime.Jan);
