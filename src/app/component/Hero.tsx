import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  return (
    <>
      <article className="flex flex-col items-center justify-center h-96 gap-6 bg-bgBeige md:h-5/6 md:pt-16 md:pb-16 lg:items-end lg:pr-32">
        <Image
          src="/perfil.jpeg"
          width={144}
          height={144}
          alt="image"
          className="w-36 h-36 rounded-full shadow-2xl md:w-56 md:h-56 "
        />

        <h1 className="uppercase text-3xl text-green font-light md:text-5xl">
          Diany<span className="uppercase text-3xl text-green font-bold md:text-5xl"> Martínez</span>
        </h1>
        <p className="w-4/5 text-base  font-semibold text-center text-grisStrone md:text-2xl md:w-96 lg:text-end lg:w-96">
          Junior Front-End Developer | UX/UI Design | Graphic Design
        </p>

        <div className="flex flex-row gap-8">
          <a href="https://www.linkedin.com/in/diany-martinez/" target="_blank">
            <Image
              src="/linkedin.png"
              width={50}
              height={50}
              alt="image"
              className="w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14"
            />
          </a>

          <a href="https://github.com/Diany0121" target="_blank">
            <Image
              src="/github.png"
              width={50}
              height={50}
              alt="image"
              className="w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14"
            />
          </a>

          <a href="https://www.behance.net/dianyluna31" target="_blank">
            <Image
              src="/behance.png"
              width={50}
              height={50}
              alt="image"
              className="w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14"
            />
          </a>
          <a href="https://drive.google.com/file/d/1nEJ7bgqjjAtZDzg_ph1dSYVISseZO6FG/view?usp=sharing" target="_blank">
            <Image
              src="/descargar.png"
              width={50}
              height={50}
              alt="image"
              className="w-7 h-7 md:w-10 md:h-10 lg:w-14 lg:h-14"
            />
          </a>
        </div>
      </article>
    </>
  );
};
