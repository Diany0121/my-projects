import Image from "next/image";
import { ibm_plex_mono } from "../font/font";
import { ibm_plex_sans } from "../font/font";

export const Tech = () => {
  return (
    <>
      <div id="tech" className="flex flex-col items-center gap-5">
        <h3 className={`${ibm_plex_sans.className} text-2xl font-semibold mt-5 text-green md:text-3xl`}>Skills</h3>
      </div>

      <div className="flex flex-col justify-center flex-wrap ">
        <h4 className={`${ibm_plex_mono.className} text-base font-medium p-4 md:pl-8 md:text-lg`}>Tecnologías</h4>

        <ul className="flex flex-row flex-wrap justify-center gap-3.5 md:gap-9 ">
          <li className="flex flex-col items-center">
            <Image
              src="/iconTech/html.png"
              width={50}
              height={100}
              alt="image"
              className="w-12 h-12"
            />
            <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>HTML5</span>
          </li>

          <li className="flex flex-col items-center">
          <Image
            src="/iconTech/css.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>CSS3</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/sass.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Sass</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/javascript.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Javascript</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/typescript.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Typescript</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/react.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>React</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/nextjs.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Next.js</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/tailwindcss.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>TailwindCSS</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/bootstrap.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Bootstrap</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/nodejs.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Node.js</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/expressjs.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Express.js</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/npm.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>NPM</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/git.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>Git</span>
        </li>

        <li className="flex flex-col items-center">
          <Image
            src="/iconTech/github.png"
            width={50}
            height={100}
            alt="image"
            className="w-12 h-12"
          />
          <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone font-normal leading-6`}>GitHub</span>
        </li>
        </ul>

        

      </div>

      <div className="flex flex-col w-full">
        <h4 className={` ${ibm_plex_mono.className} text-base font-medium p-4 md:pl-8 md:text-lg`}>Soft skills</h4>
        <span className={` ${ibm_plex_mono.className} text-xs text-grisStrone text-justify font-light leading-5 p-4 md:pl-8 md:text-sm` }>
          Buena comunicación | Filosofía Agile (Scrum) | Pair-Team Programming |
          Mobile First | Organización | Atención al detalle | Autonomía
        </span>
      </div>
    </>
  );
};
