import React from "react"
import movies from "../Utils/MovieMockData"
import TodoCard from "./TodoCard";

// Low level planning (degisn)
// create Header [simiple]
// mainMoiveContainer > all moives Show with [title,description,genre,rating,isTrending]
// create top ratings movies button
// create isTrending toggle features
// create search feature of movie 

// Movie Container Component
const MovieContainer = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       {movies.map((movie,index) => (
        <TodoCard key={index} movie={movie}  />
      ))}
    </div>
  );
};

export default MovieContainer;