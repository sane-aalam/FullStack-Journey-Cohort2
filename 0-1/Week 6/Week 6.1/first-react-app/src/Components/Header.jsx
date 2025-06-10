
import React from "react";

const Header = () =>{
    return(
        <div className="flex items-center justify-between shadow-2xl">
            <div className="ml-20 text-2xl font-bold">
                <h3 className="underline">MOVIE-TODO</h3>
            </div>
            <div className="flex mr-20 p-5">
                <li className="list-none mr-5 text-1xl font-semibold p-2"><a href="">HOME</a></li>
                <li className="list-none mr-5 text-1xl font-semibold p-2"><a href="">ABOUT</a></li>
                <li className="list-none mr-5 text-1xl font-semibold p-2"><a href="">CONTACT US</a></li>
                <li className="list-none mr-5 text-1xl font-semibold p-2"><a href="">WATCHED MOVIE</a></li>
                <li className="list-none mr-5 text-1xl font-semibold p-2"><a href="">HELP CENTER</a></li>
            </div>
        </div>
    )
}

export default Header;
