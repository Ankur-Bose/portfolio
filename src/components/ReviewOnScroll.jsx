import React from "react";
import { useRef, useEffect } from "react";

export const ReviewOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
            ref.current.classList.add("visible");
        }
        else{
            ref.current.classList.remove("visible");
        }
    }, {threshold: 0.1, rootMargin: "0px 0px -15px 0px"})


    if(ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });
  

  return (
    <div ref={ref} className="reveal">
      {" "}
      {children}{" "}
    </div>
  );
};