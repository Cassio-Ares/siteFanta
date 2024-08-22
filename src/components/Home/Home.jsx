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
  const appleRef = useRef(null);
  const berryRef = useRef(null);

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
           fantaRef.current.style.transform = `translate(157%, -60%) translateX(-50%) translateY(-50%)`;
        }
      }

      // Modifique a folha um com base na rolagem
      if (folhaOneRef.current) {
        if(scrollPosition < 2 * windowHeight){
            folhaOneRef.current.style.transform = `translate(${5 + scrollPosition * 0.1}%, ${-200 + scrollPosition * -0.04}%) rotate(${60 + scrollPosition * 0.2}deg)`;
            folhaOneRef.current.style.display = 'block';
         }else{
          folhaOneRef.current.style.display = 'none';
        }
       
      }

      // Modifique a folha dois com base na rolagem
      if (folhaTwoRef.current) {
        if(scrollPosition < 2 * windowHeight){
           folhaTwoRef.current.style.transform = `translate(${380 - scrollPosition * 0.2}%, ${-60 + scrollPosition * 0.02}%) translateX(${scrollPosition * 0.25}%) rotate(${240 + scrollPosition * 0.02}deg)`;
           folhaTwoRef.current.style.display = 'block';
          }else{
          folhaTwoRef.current.style.display = 'none';
        }
       
      }

      // Modifique o círculo com base na rolagem
      if (circleRef.current) {
        if(scrollPosition < 2* windowHeight){
           circleRef.current.style.transform = `translate(${200 - scrollPosition * 0.15}%, ${-185 + scrollPosition * 0.15}%)`;
           circleRef.current.style.display = 'block';
          }else{
            circleRef.current.style.display = 'none';
          }
       
      }

      // Modifique a laranja com base na rolagem
      if (orangeRef.current) {
        if(scrollPosition < 2 * windowHeight){
          orangeRef.current.style.transform = `translate(${120 - scrollPosition * 0.01}%, ${-60 + scrollPosition * 0.02}%)`;
          orangeRef.current.style.display = 'block'
        }else{
          orangeRef.current.style.display = 'none'
        }
      }

      if(appleRef.current){
        if(scrollPosition < 2 * windowHeight){
          appleRef.current.style.opacity = '0'
       }else{
          appleRef.current.style.transform = `translate(66%, -62%) translateX(-50%) translateY(-50%)`;
          appleRef.current.style.opacity = '1'
       }
      }

      if(berryRef.current){
        if(scrollPosition < 2 * windowHeight){
          berryRef.current.style.opacity = '0'
       }else{
          berryRef.current.style.transform = `translate(260%, -62%) translateX(-50%) translateY(-50%)`;
          berryRef.current.style.opacity = '1'
       }
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
        <img ref={orangeRef} className="img_orange" src="/orange.png" alt="Fanta_orange" />
        <img ref={berryRef} className="img_fanta_Berry" src="/lata.png" alt="" />
        <img ref={appleRef} className="img_fanta_Apple" src="/lataApple.png" alt="" />
      </div>
    </>
  );
};


/**
 * explicação de:useRef()
 * 
 * 
 * hook do react que retorna um elemnto (ou objeto) com a propriedade current:
 * 
 * ex: element.current.style.transform = .......
 * 
 */

/**
 * explicação de window.scrollY;
 * 
 * O que é: 
 *      window.scrollY é uma propriedade que retorna a quantidade de pixels que o documento foi rolado no eixo vertical.
 * 
 * Para que serve: 
 *     É útil para criar efeitos baseados na rolagem da página, como animações ou carregar mais conteúdo conforme o usuário rola a página para baixo.
 * 
 * Exemplo de uso: 
 *     Você pode usar window.scrollY para verificar a posição atual do scroll e tomar ações com base nisso, como iniciar uma animação.
 * 
 * 
 * const handleScroll = () => {
 *      console.log(window.scrollY); // Exibe a posição atual do scroll
 * };
 *
 *  window.addEventListener('scroll', handleScroll);
 */

/**
 * explicação de window.innerHeight;
 * 
 * O que é: 
 *     window.innerHeight é uma propriedade que retorna a altura da área de conteúdo visível da janela do navegador, em pixels.
 * Para que serve:
 *     É útil para calcular a altura disponível na janela do navegador, especialmente para layouts responsivos ou para determinar se um elemento está visível na viewport.
 *
 * Exemplo de uso: 
 *     Você pode usar window.innerHeight para determinar se um elemento está dentro da área visível do navegador.
 * 
 * const windowHeight = window.innerHeight;
 * console.log(windowHeight); 
 */