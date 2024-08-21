"use client";
import { useEffect, useRef } from "react";
import "./styles.css";

/**
 * obs: useRef hook que me permite acessa e manipular componentes ou elemento e manipular no DOM; lembrando que não causa re-renderização.
 * 
 */
export const HomeView = () => {
  // Criar um ref separado para cada imagem
  const fantaRef = useRef(null);
  const folhaOneRef = useRef(null);
  const folhaTwoRef = useRef(null);
  const circleRef = useRef(null);
  const orangeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Modifique a imagem da Fanta com base na rolagem
      if (fantaRef.current) {
        if (scrollPosition < 2 * windowHeight) {
          fantaRef.current.style.transform = `translate(${120 - scrollPosition * 0.1}%, ${-100 + scrollPosition * 0.01}%) translateX(${scrollPosition * -0.08}%)`;
        } else {
          // Centraliza a imagem quando chegar à terceira página
          fantaRef.current.style.transform = `translate(160%, -60%) translateX(-50%) translateY(-50%)`;
        }
      }

      // Modifique a folha um com base na rolagem
      if (folhaOneRef.current) {
        folhaOneRef.current.style.transform = `translate(${5 + scrollPosition * 0.1}%, ${-200 + scrollPosition * -0.04}%) rotate(${60 + scrollPosition * 0.2}deg)`;
      }

      // Modifique a folha dois com base na rolagem
      if (folhaTwoRef.current) {
        folhaTwoRef.current.style.transform = `translate(${380 - scrollPosition * 0.2}%, ${-60 + scrollPosition * 0.02}%) translateX(${scrollPosition * 0.25}%) rotate(${240 + scrollPosition * 0.02}deg)`;
      }

      // Modifique o círculo com base na rolagem
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${200 - scrollPosition * 0.15}%, ${-185 + scrollPosition * 0.15}%)`;
      }

      // Modifique a laranja com base na rolagem
      if (orangeRef.current) {
        orangeRef.current.style.transform = `translate(${120 - scrollPosition * 0.01}%, ${-60 + scrollPosition * 0.02}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpar o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container_homeView">
        <h1 className="titleHome">Fanta</h1>
        <img ref={fantaRef} className="img_fanta" src="/fanta.png" alt="Fanta" />
        <img ref={folhaOneRef} className="folha_one" src="/folhaTwo.png" alt="Fanta" />
        <img ref={folhaTwoRef} className="folha_Two" src="/folhaTwo.png" alt="Fanta" />
        <img ref={circleRef} className="img_circle" src="/circleOrange.png" alt="Fanta" />
        <img ref={orangeRef} className="img_orange" src="/orange.png" alt="Fanta" />
      </div>
    </>
  );
};
