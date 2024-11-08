import Image from "next/image";
import { ibm_plex_mono } from "../font/font";
import { ibm_plex_sans } from "../font/font";

export const Project = () => {
  return (
    <>
      <div id="project" className="flex flex-col items-center gap-5 ">
        <h3
          className={`${ibm_plex_sans.className} text-2xl font-semibold mt-8 text-green md:text-3xl lg:text-4xl lg:mt-14`}
        >
          Proyectos
        </h3>

        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-x-28 lg:justify-evenly">
          <div className="flex flex-col justify-center ">
            <article className="flex flex-col">
              <a
                className="flex flex-col items-center"
                href="https://diany0121.github.io/Group-project/"
                target="_blank"
              >
                <Image
                  src="/portada_projectOne.png"
                  width={290}
                  height={205}
                  alt="image"
                  className="rounded-2xl mt-5 lg:w-80 lg:h-56"
                />
              </a>

              <span
                className={`${ibm_plex_mono.className} text-base font-medium pt-4 `}
              >
                Web colaborativa
              </span>

              <div className="flex gap-x-2 pt-4">
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium ">
                  HTML5
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  CSS3
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  Responsive
                </span>
              </div>

              <div className="flex gap-x-2 pt-4">
                <a
                  href="https://github.com/Diany0121/Group-project"
                  target="_blank"
                >
                  <Image
                    src="/github.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://diany0121.github.io/Group-project/"
                  target="_blank"
                >
                  <Image
                    src="/monitor.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </article>
          </div>

          <div className="flex flex-col justify-center">
            <article className="flex flex-col">
              <a
                className="flex flex-col items-center"
                href="https://project-promo-v-module-4-team-1.onrender.com/"
                target="_blank"
              >
                <Image
                  src="/portada_projectTwo.png"
                  width={290}
                  height={205}
                  alt="image"
                  className="rounded-2xl mt-5 lg:w-80 lg:h-56"
                />
              </a>

              <span
                className={`${ibm_plex_mono.className} text-base font-medium pt-4 `}
              >
                Proyectos Molones
              </span>

              <div className="flex gap-x-2 pt-4">
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium ">
                  React
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  JavaScript
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  Sass
                </span>
              </div>

              <div className="flex gap-x-2 pt-4">
                <a
                  href="https://github.com/Diany0121/project-promo-V-module-4-team-1"
                  target="_blank"
                >
                  <Image
                    src="/github.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://project-promo-v-module-4-team-1.onrender.com/"
                  target="_blank"
                >
                  <Image
                    src="/monitor.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </article>
          </div>

          <div className="flex flex-col justify-center">
            <article className="flex flex-col">
              <a
                className="flex flex-col items-center"
                href="https://diany0121.github.io/modulo-3-evaluacion-final-Diany0121/"
                target="_blank"
              >
                <Image
                  src="/portada_projectThree.png"
                  width={290}
                  height={205}
                  alt="image"
                  className="rounded-2xl mt-5 lg:w-80 lg:h-56"
                />
              </a>

              <span
                className={`${ibm_plex_mono.className} text-base font-medium pt-4 `}
              >
                Harry Potter
              </span>

              <div className="flex gap-x-2 pt-4">
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium ">
                  React
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  JavaScript
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  Sass
                </span>
              </div>

              <div className="flex gap-x-2 pt-4">
                <a
                  href="https://github.com/Diany0121/modulo-3-evaluacion-final-Diany0121"
                  target="_blank"
                >
                  <Image
                    src="/github.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://diany0121.github.io/modulo-3-evaluacion-final-Diany0121/"
                  target="_blank"
                >
                  <Image
                    src="/monitor.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </article>
          </div>

          <div className="flex flex-col justify-center">
            <article className="flex flex-col">
              <a
                className="flex flex-col items-center"
                href="https://diany0121.github.io/project-promo-V-module-2-team-1/"
                target="_blank"
              >
                <Image
                  src="/portada_projectFour.png"
                  width={290}
                  height={205}
                  alt="image"
                  className="rounded-2xl mt-5 lg:w-80 lg:h-56"
                />
              </a>

              <span
                className={`${ibm_plex_mono.className} text-base font-medium pt-4 `}
              >
                Awesome Profile Cards
              </span>

              <div className="flex gap-x-2 pt-4">
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium ">
                  HTML5
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  JavaScript
                </span>
                <span className="text-sm rounded-md text-center content-center w-20 h-8 shadow-inner text-green font-medium">
                  Sass
                </span>
              </div>

              <div className="flex gap-x-2 pt-4">
                <a
                  href="https://github.com/Diany0121/project-promo-V-module-2-team-1"
                  target="_blank"
                >
                  <Image
                    src="/github.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://diany0121.github.io/project-promo-V-module-2-team-1/"
                  target="_blank"
                >
                  <Image
                    src="/monitor.png"
                    width={50}
                    height={50}
                    alt="image"
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
