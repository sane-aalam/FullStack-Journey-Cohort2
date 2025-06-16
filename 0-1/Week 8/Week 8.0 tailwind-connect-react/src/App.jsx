import { useState } from "react";
import "./App.css";

const ContainerFirst = () => {
  return (
    <div className="flex justify-around items-center w-full border-5 border-black p-4">
      <div className="bg-green-300 border-2 ml-5 p-2">HOME</div>
      <div className="bg-red-300 border-2 ml-5 p-2">ABOUT</div>
      <div className="bg-green-300 border-2 ml-5 p-2">CONTACT US</div>
      <div className="bg-green-300 border-2 ml-5 p-2">CAREER PAGE</div>
    </div>
  );
};

const CardContainer = ({ tittle }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div>
        <img
          className="w-full"
          src="./img/pic1.jpg"
          alt="Sunset in the mountains"
        ></img>
      </div>
      <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">{tittle}</div>
        <div className="text-gray-700 text-base">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.{" "}
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photo
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tailwindcss
        </span>
      </div>
    </div>
  );
};

const DukanFooter = () => {
  return (
    <div className="bg-gray-950 text-white flex justify-evenly flex-wrap p-5">
       <div>
        <img src="https://kickstartsidehustle.com/wp-content/uploads/2021/09/duukan.jpg" alt="" className="w-30 mt-6" />
       </div>
      <div className="p-5">
        <p className="mt-3 mb-3 border-1 border-green-400" >Business tools</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Dukaan for PC</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Dukaan delivery</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Dukaan plugins</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Dukaan themes</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Dukaan enterprise</p>
      </div>
      <div className="p-5">
        <p className="mt-3 mb-3 border-1 border-green-400" >Awards '22</p>
        <p className="mt-3 mb-3 border-1 border-green-400" >Help center</p>
        <p className="mt-3 mb-3 border-1 border-green-400" >Blog</p>
        <p className="mt-3 mb-3 border-1 border-green-400" >Banned items</p>
      </div>
      <div className="p-5">
        <p  className="mt-3 mb-3 border-1 border-green-400">About</p>
        <p  className="mt-3 mb-3 border-1 border-green-400">Privacy</p>
        <p  className="mt-3 mb-3 border-1 border-green-400">Terms</p>
        <p  className="mt-3 mb-3 border-1 border-green-400">Contact</p>
        <p  className="mt-3 mb-3 border-1 border-green-400">FAQ's</p>
      </div>
      <div className="p-5">
        <p  className="mt-3 mb-3 border-1 border-green-400"> Jobs</p>
        <p  className="mt-3 mb-3 border-1 border-green-400"> Branding</p>
        <p className="mt-3 mb-3 border-1 border-green-400"> Press inquiry</p>
        <p className="mt-3 mb-3 border-1 border-green-400"> Bug bounty</p>
      </div>
      <div className="p-5">
        <p className="mt-3 mb-3 border-1 border-green-400">Facebook</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Twitter</p>
        <p className="mt-3 mb-3 border-1 border-green-400">Linkedin</p>
      </div>
    </div>
  );
};

const MainCardContainer = () => {
  return (
    <div className="flex justify-center gap-4 ml-4 mr-4">
      <CardContainer tittle={"Water Hot"} />
      <CardContainer tittle={"Water Cool"} />
      <CardContainer tittle={"Water Cool"} />
      <CardContainer tittle={"Water Medium"} />
    </div>
  );
};

function App() {
  return (
    <h1 className="flex flex-col gap-4">
      <ContainerFirst />
      <MainCardContainer />
      <DukanFooter />
    </h1>
  );
}

export default App;
