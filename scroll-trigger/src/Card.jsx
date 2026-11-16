
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const Card = ({ image }) => {

    useEffect(()=>{
        gsap.utils.toArray('.card').forEach(card=>{
            gsap.to(card, {
                scale: 0.8,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    start: "top 15%",
                    end: "bottom 15%",
                    markers: true,
                    scrub: true
                }
            })
        })
    })

  return (
    <div className="card sticky top-[15vh] flex flex-col items-center w-[90vw] md:w-[27vw] py-[15vh] px-5 rounded-[25px] gap-4 bg-[#2e251e]">
      <img
        className="w-[180px] aspect-square object-contain"
        src={image}
        alt="Algorithm illustration"
      />
      <h1 className="text-5xl font-thin">
        The <br />
        <span className="font-bold">Algorithm</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Itaque, possimus.
      </p>
    </div>
  );
};

export default Card;
