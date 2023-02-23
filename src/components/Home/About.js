import Link from "next/link";
import React from "react";
import { stats } from "../../data/stats";
import experts from "../../../public/experts.webp";
import Image from "next/image";

const About = () => {
  return (
    <section className="container max-w-6xl overflow-x-hidden scroll-smooth my-20 sm:my-8">
      <div className="my-8 flex gap-8 md:flex-col">
        <div className="flex-1 text-lg">
          <h2 className="text-4xl uppercase text-neutral-300 mb-8">We are inspired to empower great people</h2>
          <p>We are a company driven by innovation with a focus on developing dynamic web, mobile & desktop application solutions for anyone wants to take advantage of digital technologies.</p>
          <p>From idea discussion to deployment of the solution - we will take full responsibility to make our clients happy.</p>

          <Link href="about-us">
            <button className="mt-4 btn">Read Our Story</button>
          </Link>
        </div>

        <div className="relative flex-1 max-w-xl md:hidden">
          <Image src={experts} quality={100} width={985} height={584} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* <h2 className="text-4xl uppercase text-neutral-300 text-center mt-20">The Stats</h2> */}

      <div className="grid grid-cols-3 gap-16 my-12 text-center md:grid-cols-2 md:gap-8 sm:grid-cols-1 sm:gap-8">
        {stats.map(({ title, count }, index) => {
          return (
            <div className="bg-gradient-to-tr from-transparent to-neutral-900 p-6" key={index}>
              <div className="flex justify-center">
                <h1 className="text-7xl font-bold">{count}</h1>
                <p className="text-4xl font-bold ml-2">+</p>
              </div>
              <h2 className="text-2xl mt-2">{title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
