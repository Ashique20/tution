import React from "react";
import idea from '../Assets/Vector (5).png'
import sound from '../Assets/Vector (4).png'
import reload from '../Assets/Vector (6).png'
import arrow1 from '../Assets/Vector (1).png'
import arrow2 from '../Assets/Vector (2).png'
import zoom from '../Assets/Vector (3).png'
import logo2 from '../Assets/logo.png'
import add from  '../Assets/Vector.png'
import './slider.css'
import vector from '../Assets/Clip path group.png'


const Slider =()=>{
    return(
        <div >
            <div className="card  w-[712px]   bg-base-100  ml-[32%]   mt-[30px]	">
  <div className="w-[712px] h-[393.19px] bg-gradient-to-l from-[#051A91] from-10% via-[#061C93]via-30% to-[#2284F1] to-80% to-[#1F80EB] to-90% rounded-3xl ">

 
  <div>
    <div className="flex gap-[600px] ml-10 mt-10">
    <img src={idea} alt="" />
    <img  src={sound} alt="" />
    </div>
    <p  className="text-[46px] font-bold text-white text-center mt-24 ">9 + 6 + 7x - 2x - 3</p>
  </div>
   
  
   
    </div>
  <div className=" mt-16">
   <ul className="flex gap-10 ml-10">
    <li className="mr-24"><img src={reload} alt="" /></li>
    <li><img src={arrow1} alt="" /></li>
    <li><h1 className="text-[#202B37] text-xl mt-2 font-bold">01/10</h1></li>
    <li><img src={arrow2} alt="" /></li>
    <li className="ml-32 "><img src={zoom} alt="" /></li>
   </ul>
  </div>
</div>

    <ul className="flex ml-80 mt-40
    ">
        <li className="flex">
          <div className="card border rounded-full w-24   h-24 bg-white shadow-xl">
          <img className="w-16 ml-4 mt-6"  src={vector} alt="" /> 
          </div>
          <img className="ml-5 w-36 h-20" src={logo2} alt="" /></li>
        
     
     <img className=" ml-[910px] h-10 mt-3 " src={add} alt="" /> 
        <p className="mt-5 ml-4   ">Create Flashcard</p>
     
        
    </ul>


        </div>
    )
}

export default Slider;