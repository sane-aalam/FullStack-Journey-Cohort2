

function TodoCard(props) {

  const {title,description,rating,genre,isTrending} = 
                                              props.movie;

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300 ease-in-out">
      <p className="text-2xl font-semibold text-gray-800">{title}</p>
      <p className="text-1xl font-semibold text-gray-800">{description}</p>
      <p className="text-lg font-semibold text-gray-800">{genre}</p>
      <p className="text-lg font-semibold text-gray-800">{rating}</p>
      <button className="text-lg font-semibold border-2 pl-5 pr-5 bg-gray-500 text-white">{isTrending?"Yes":"NO"}</button>
    </div>
  );
}

export default TodoCard;