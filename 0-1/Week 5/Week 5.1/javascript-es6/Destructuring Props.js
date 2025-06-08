// - Bad way to handle props
function MyComponent(props) {
  // Access prop directly
  console.log("props original data", props);
  var name = props.name;
  var cloudinaryImageId = props.cloudinaryImageId;
  var avgRating = props.avgRating;
  var cuisines = props.cuisines;
}

// - Best Way to handle props
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

MyComponent({
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
});
