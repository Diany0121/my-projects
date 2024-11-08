import Image from "next/image";
import { ibm_plex_mono } from "../font/font";
import { ibm_plex_sans } from "../font/font";


export const Footer = () => {
  return (
    <>
      <footer className="w-full  p-4 bg-white bg-bgBeige rounded-t-3xl">
        <div className="flex flex-col">
          <div className="flex justify-around gap-20 md:gap-60">
            <nav className="">
              <ul className="flex flex-col gap-3">
                <li className={`${ibm_plex_mono.className} text-sm text-grisStrone font-normal leading-normal cursor-pointer hover:text-green md:text-base`}>
                  <a href="#aboutme">Sobre mi</a>
                </li>
                <li className={`${ibm_plex_mono.className} text-sm text-grisStrone font-normal leading-normal cursor-pointer hover:text-green md:text-base`}>
                  <a href="#project">Proyectos</a>
                </li>
                <li className={`${ibm_plex_mono.className} text-sm text-grisStrone font-normal leading-normal cursor-pointer hover:text-green md:text-base`}>
                  <a href="#tech">Skills</a>
                </li>
                <li className={`${ibm_plex_mono.className} text-sm text-grisStrone font-normal leading-normal cursor-pointer hover:text-green md:text-base`}>
                  <a href="mailto:dianymartinez31@gmail.com">Contacto</a>
                </li>
              </ul>
            </nav>

            <div className="flex flex-row gap-3.5">
              <a
                href="https://www.linkedin.com/in/diany-martinez/"
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  width={50}
                  height={50}
                  alt="image"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>

              <a href="https://github.com/Diany0121" target="_blank">
                <Image
                  src="/github.png"
                  width={50}
                  height={50}
                  alt="image"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>

              <a href="https://www.behance.net/dianyluna31" target="_blank">
                <Image
                  src="/behance.png"
                  width={50}
                  height={50}
                  alt="image"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1nEJ7bgqjjAtZDzg_ph1dSYVISseZO6FG/view?usp=sharing"
                target="_blank"
              >
                <Image
                  src="/descargar.png"
                  width={50}
                  height={50}
                  alt="image"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className={` ${ibm_plex_mono.className} text-xs font-normal text-grisStrone leading-normal text-center p-3.5 md:text-base`}>
            {" "}
            Designed & Developed By Diany Martinez 👩🏻‍💻 2024
          </p>
        </div>
      </footer>
    </>
  );
};
