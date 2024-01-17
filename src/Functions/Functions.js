import React from "react";

import './Function.css'
import Slider from "./Slider";
import home from '../Assets/Vector (8).png'
import direct from '../Assets/Vector (7).png'

const Functions=()=>{
    return(
      <div>
         <div className="ml-24 mt-10">
            <ul className="flex gap-[10px] ">
                <li><img src={home} alt="" /></li>
                <li className="mt-2"><img src={direct} alt="" /></li>
                <li >Flashcard</li>
                <li className="mt-2"><img src={direct} alt="" /></li>
                <li>Mathematics</li>
                <li className="mt-2"><img src={direct} alt="" /></li>
                <li className="text-[#06286E] font-bold">Relation and Function</li>
                
            </ul>
        </div>
        <div>
           
            <h1 className="ml-20 text-4xl font-bold bg-gradient-to-br from-[#06286E] to-[#164EC0]  text-transparent bg-clip-text mt-[233px] ml-[105px]"> Relations and Functions (Mathematics)</h1>
        
            <div className="flex-none text-center mt-[20px]">
          <ul className="menu menu-horizontal text-[#3A3740] text-[18px] gap-[40px] ">
            <li ><a>Study</a></li>
            <li  ><a>Quiz</a></li>
            <li  ><a>Test</a></li>
            <li  ><a>Game</a></li>
           
          </ul>
        </div>
        <Slider></Slider>

        </div>
        </div>
    )
}

export default Functions;