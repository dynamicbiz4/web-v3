import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../../data/projects";

const RecentProjects = () => {
  return (
    <section className="container max-w-6xl overflow-x-hidden scroll-smooth my-20 sm:my-8">
      <div className="flex flex-row-reverse mt-16 gap-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
          <div>
            <h2 className="text-4xl uppercase text-neutral-300 mb-8">Our latest projects</h2>
            <p className="mt-8 text-lg">The professional designers and developers from Dynamic Biz will work on your project and will only do so in accordance with your particular specifications.</p>
            <Link href="services">
              <button className="mt-4 btn">View All</button>
            </Link>
          </div>

          {projects.slice(0, 3).map(({ title, thumbnail, url, stack }, index) => {
            return (
              <div className={`flex flex-col`} key={index}>
                <div className="overflow-hidden relative">
                  <Image src={thumbnail} width={400} height={200} className="w-full h-full object-cover hover:scale-105 duration-200 transition-transform ease-in-out" alt={title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
