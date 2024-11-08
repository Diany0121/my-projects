import Image from "next/image";
import { ibm_plex_mono } from "../font/font";
import { ibm_plex_sans } from "../font/font";


export const AboutMe = () => {
  return (
    <>
      <article id="aboutme" className="flex flex-col items-center bg-bgBeige rounded-b-3xl shadow-2xl lg:flex-row">
        <Image 
        src="/aboutme@2x.jpg"
        width={300}
        height={205}
        alt="image"
        className=" w-5/6 rounded-2xl mt-5 shadow-2xl md:w-3/6 lg:ml-9 lg:mb-9"/>

        <div className="flex flex-col items-center gap-5 md:gap-6 ">
          <h3 className={`${ibm_plex_sans.className} text-2xl font-semibold mt-5 text-green md:text-3xl lg:text-4xl lg:mt-9` } >Sobre mi</h3>
          <p className={`${ibm_plex_mono.className} flex flex-col text-xs text-grisStrone font-light text-justify w-11/12 leading-5 md:w-8/12 md:text-sm lg:w-5/6`}>
          Diseñadora convertida en desarrolladora de software, con una
          pasión por combinar la creatividad con la precisión técnica. Con una
          sólida formación en diseño gráfico y una transición hacia el
          desarrollo web, combinando la estética con la funcionalidad en cada
          proyecto.
          </p>

          <span className={` ${ibm_plex_mono.className} flex flex-col text-xs text-grisStrone font-light text-justify w-11/12 leading-5 mb-5 md:w-8/12 md:text-sm md:mb-7 lg:w-5/6`}>
            Me adapto fácilmente a dinámicas de equipo, aportando una comunicación clara. 
            Mi transición al desarrollo de software es un testimonio de mi compromiso con 
            el aprendizaje continuo. Siempre buscando oportunidades para expandir mis 
            habilidades.
          </span>
        </div>
      </article>
    </>
  );
};
