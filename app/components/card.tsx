"use client"

let defaultStyling = "card glass bg-blue-200 h-80 max-[600px]:h-52 overflow-hidden";

import classNames from "classnames"

import anime from 'animejs/lib/anime.es.js';

import { useEffect } from 'react';



export default function Card({hrefbtn, hrefimg, description, title, text, className}: {hrefbtn? : string, hrefimg?: string, description: string, title: string, text: string, className?: string}) {
  useEffect(() => {
    const figures = document.querySelectorAll<HTMLElement>('figure img');

    figures.forEach((img) => {
      img.addEventListener('mouseenter', () => enterImage(img));
      img.addEventListener('mouseleave', () => leaveImage(img));
    });

    function enterImage(el: HTMLElement) {
      animateProjectenImage(el, 1.5, 1000, 100);
    }

    function leaveImage(el: HTMLElement) {
      animateProjectenImage(el, 1.0, 1000, 100);
    }

    function animateProjectenImage(
      el: HTMLElement,
      scale: number,
      duration: number,
      elasticity: number
    ) {
      anime.remove(el);
      anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
      });
    }

    // Cleanup
    return () => {
      figures.forEach((img) => {
        img.removeEventListener('mouseenter', () => enterImage(img));
        img.removeEventListener('mouseleave', () => leaveImage(img));
      });
    };
  }, []); // Empty dependency array ensures this runs only once after mount

  
  return (
        <div className={classNames(defaultStyling, className)}>
     {hrefimg && ( // Only render the <figure> if href is non-empty
          <figure className="relative overflow-hidden h-full w-full">
          <img 
              className="absolute inset-0" 
              src={hrefimg} 
              alt={description} 
          />
      </figure>
      )}
  <div className="card-body">
    <h2 className="card-title place-self-center">{title}</h2>
    <p>{text}</p>
    <div className="card-actions justify-end">
      {hrefbtn && (<a href={hrefbtn}><button className="btn btn-primary">Link</button></a>)}
    </div>
  </div>
</div>
    )
}
