import { useState } from 'react'
import './App.css'


const ContainerFirst = () =>{
  return(
    <div className='flex justify-around items-center w-full border-5 border-black p-4'>
       <div className='bg-green-300 border-2 ml-5 p-2'>HOME</div>
       <div className='bg-red-300 border-2 ml-5 p-2'>ABOUT</div>
       <div className='bg-green-300 border-2 ml-5 p-2'>CONTACT US</div>
       <div className='bg-green-300 border-2 ml-5 p-2'>CAREER PAGE</div>
    </div>
  )
}

const CardContainer = ({tittle}) =>{
  return(
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div>
        <img className="w-full" src='./img/pic1.jpg' alt="Sunset in the mountains"></img>
      </div>
      <div className='px-6 py-6'>
        <div className="font-bold text-xl mb-2">{tittle}</div>
        <div className='text-gray-700 text-base'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </div>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photography</span>
         <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#photo</span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#tailwindcss</span>
      </div>
    </div>
  )
}

const MainCardContainer = () =>{
  return(
    <div className='flex justify-center gap-4 ml-4 mr-4'>
        <CardContainer tittle={"Water Hot"}/>
        <CardContainer tittle={"Water Cool"}/>
         <CardContainer tittle={"Water Cool"}/>
        <CardContainer tittle={"Water Medium"}/>
       </div>
  )
}


function App() { 
  return(
    <h1 className="flex flex-col gap-4">
       <ContainerFirst/>
       <MainCardContainer/>
    </h1>
  )
}

export default App
