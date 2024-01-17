import React from "react";
import './Faq.css'
const Faq=()=>{
    return(
        <div className="mt-[200px] mb-[300px]">
            <h1 className="text-5xl  bg-gradient-to-r from-[#06286E] to-[#164EC0]  text-transparent bg-clip-text ml-28 mb-5"> FAQ</h1>
           <div className="gap-[32px]  w-[848px] h-[238px] ">
           <div className="collapse collapse-arrow bg-base-200 border border-gradient-to-r from-[#164EC0] to-[#06286E]  mt-[10px]  ml-[104px] rounded-[12px] h-[58px]">
  <input type="radio" name="my-accordion-2" /> 
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium ">
    Click to open this one and close others
  </div>
  <div className="collapse-content "> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 border  mt-[10px]  ml-[104px] rounded-[12px] gap-[32px] h-[58px]">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 border   mt-[10px]  ml-[104px] rounded-[12px] h-[58px]">
  <input type="radio" name="my-accordion-2" /> "
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
           </div>
        </div>
    )
}

export default Faq;