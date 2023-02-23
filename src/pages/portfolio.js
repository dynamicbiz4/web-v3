import Head from "next/head";
import Image from "next/image";
import { Icons } from "../data/icons";
import { projects } from "../data/projects";

const ECommerce = () => (
  <>
    <Head>
      <title>Portfolio | Dynamic Biz</title>
    </Head>

    <main>
      <section className="relative h-[30rem] w-full">
        <Image alt="BG Image" src="/portfolio-bg.jpg" className="object-cover" fill />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
        <h2 className="absolute top-1/2 left-0 right-0 w-fit m-auto text-7xl text-white font-bold">Portfolio</h2>
      </section>

      <section className="container max-w-6xl text-lg space-y-8">
        {projects.map(({ title, thumbnail, url, stack, category }, index) => {
          return (
            <div className="flex gap-20 md:gap-8 sm:flex-col" key={index}>
              <div className="relative w-1/2 h-80 sm:w-full sm:h-fit">
                <Image src={thumbnail} width={600} height={300} className="h-auto" alt={title} />
              </div>
              <div className="max-w-sm">
                <h2 className="text-3xl font-medium sm:text-2xl">{title}</h2>
                <div className="flex items-center gap-4">
                  <p className="mt-2 bg-neutral-900 w-fit py-1 px-2 rounded-md flex items-center gap-2">
                    <span className="fill-white">{Icons.stack}</span>
                    <span className="text-sm">{stack}</span>
                  </p>
                  <p className="mt-2 bg-neutral-900 w-fit py-1 px-2 rounded-md flex items-center gap-2">
                    <span className="fill-white">{Icons.tag}</span>
                    <span className="text-sm">{category}</span>
                  </p>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 btn mt-8 sm:text-base">
                    <h3>View Project</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  </>
);

export default ECommerce;
