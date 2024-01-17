import React from "react";
import { Link } from "react-router-dom";
import home from '../Assets/Vector (8).png'
import direct from '../Assets/Vector (7).png'


const Flashcard =()=>{
    return(
       <div>
        <div className="ml-24 mt-10">
            <ul className="flex gap-[16px] ">
                <li><img src={home} alt="" /></li>
                <li className="mt-2"><img src={direct} alt="" /></li>
                <li >Flashcard</li>
                <li className="mt-2"><img src={direct} alt="" /></li>
                
            </ul>
        </div>
         <div className="grid grid-cols-3 mt-20 ml-32">
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="https://cdn3.f-cdn.com/contestentries/1202987/27104635/5a2e6b7e74378_thumb900.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Quiz</h2>
    <p>A quiz is a short assessment or competition, typically consisting of questions designed to test knowledge on a specific subject. Quizzes can be educational tools used in classrooms or online platforms, helping to reinforce learning and gauge understanding. They can cover a wide range of topics and formats, from multiple-choice questions to open-ended inquiries, making them versatile tools for both formal and informal learning environments.</p>
    <div className="card-actions">
      <Link to='*' className="btn btn-primary"  > Buy Now</Link>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/premium-vector/math-background-doodle-design-set_651766-298.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Mathmatics</h2>
    <p>Mathematics is a systematic field of study that deals with the properties and relationships of numbers, quantities, shapes, and patterns. It involves logical reasoning and critical thinking to solve problems and make predictions. Math is fundamental to various disciplines and is used in everyday life for tasks ranging from basic calculations to complex scientific and engineering endeavors.</p>
    <div className="card-actions">
      <Link className="btn btn-primary"  to='/function'> Buy Now</Link>
    </div>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src="https://static.vecteezy.com/system/resources/previews/009/944/801/non_2x/gaming-gift-card-banner-logo-icon-simple-flat-design-vector.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Games</h2>
    <p>A game is a structured form of play with predefined rules and goals. It can be recreational, educational, or competitive, and it often involves skill, strategy, or chance. Games come in various forms, from board games and video games to sports and outdoor activities. They provide entertainment, social interaction, and sometimes serve as a medium for learning and skill development.</p>
    <div className="card-actions">
      <Link to='*' className="btn btn-primary"  > Buy Now</Link>
    </div>
  </div>
</div>
        </div>
       </div>
    )
}

export default Flashcard;