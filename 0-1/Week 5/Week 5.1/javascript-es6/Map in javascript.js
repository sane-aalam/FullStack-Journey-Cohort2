
const jsonData = [
    {
        id: "10892",
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
    },
    {
        id: "10891",
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
    },
    {
        id: "10895",
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
    },
]

function MyComponent(props) {
  // Access prop directly
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    parentId,
    avgRating,
    deliveryTime,
  } = props;

  console.log(id);
  console.log(name);
  console.log(cloudinaryImageId);
  console.log(locality,areaName,costForTwo,avgRating);
}

jsonData.map((fooddata) =>{
    // console.log(fooddata);
    <MyComponent resdata={fooddata}/>
})