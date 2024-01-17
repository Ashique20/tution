import React from "react";
import home from '../Assets/Vector (8).png'
const Home =()=>{
    return(
        <div >
            <div className="ml-24 mt-10">
                <img src={home} alt="" />
            </div>
            <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row ">
    <img   src="https://img.freepik.com/premium-vector/math-background-doodle-design-set_651766-298.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="ml-80">
      <h1 className="text-5xl font-bold">Tution Home</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<h1 className="ml-[50%] text-5xl text-blue mb-20">Topics</h1>

<div className="carousel carousel-end rounded-box w-[90%] ml-96 gap-[34px]">
  <div className="carousel-item">
    <img className="w-96  rounded-full h-96" src="https://cdn3.f-cdn.com/contestentries/1202987/27104635/5a2e6b7e74378_thumb900.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="w-96  rounded-full h-96" src="https://img.freepik.com/premium-vector/math-vector-concept-blue-banner-math-horizontal-modern-illustration-outline-style_104589-5682.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img className="w-96 rounded-full h-96" src="https://static.vecteezy.com/system/resources/previews/009/944/801/non_2x/gaming-gift-card-banner-logo-icon-simple-flat-design-vector.jpg" alt="Drink" />
  </div> 
  
</div>

        </div>
    )
}


export default Home;