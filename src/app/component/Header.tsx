import { ibm_plex_mono } from "../font/font";
import { ibm_plex_sans } from "../font/font";

export const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-center items-center w-full h-14 bg-bgBeige drop-shadow-sm md:text-sm lg:justify-end lg:pr-32">
        <ul className="flex justify-between gap-6 list-none md:gap-8">
          <li className={`${ibm_plex_mono.className} text-xs text-grisStrone font-normal not-italic cursor-pointer hover:text-green md:text-base lg:text-lg`}>
            <a href="#aboutme">
              sobre mi
            </a>
          </li>
          <li className={`${ibm_plex_mono.className} text-xs text-grisStrone font-normal not-italic cursor-pointer hover:text-green md:text-base lg:text-lg`}>
            <a href="#project">
              proyectos
            </a>
          </li>
          <li className={`${ibm_plex_mono.className} text-xs text-grisStrone font-normal not-italic cursor-pointer hover:text-green md:text-base lg:text-lg`}>
            <a href="#tech">
              skills
            </a>
          </li>
          <li className={`${ibm_plex_mono.className} text-xs text-grisStrone font-normal not-italic cursor-pointer hover:text-green md:text-base lg:text-lg`}>
            <a href="mailto:dianymartinez31@gmail.com">
              contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
