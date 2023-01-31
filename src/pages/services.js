import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "../data/icons";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | Dynamic Biz</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full overflow-x-hidden">
          <Image alt="BG Image" src="/services-bg.jpg" className="object-cover object-bottom" fill />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
          <h2 className="container absolute top-1/2 left-0 right-0 w-fit m-auto text-7xl text-center text-white font-bold sm:text-6xl">Our Services</h2>
        </section>

        <section className="container max-w-6xl text-lg my-20 sm:my-10">
          <h1 className="text-4xl uppercase text-neutral-300 mb-4 sm:text-3xl">01. Web Development</h1>
          <p className="text-xl sm:text-lg">
            The process of generating, building, and managing websites is known as web development. Web design, web publishing, web programming, and database management are all part of it. Web
            developers create websites by writing code, connecting it to a server, and ensuring that it is accessible to users.{" "}
          </p>
          <div className="space-y-4 mt-8 ml-8 sm:ml-0">
            <h2 className="text-2xl uppercase text-neutral-300">Landing Pages</h2>
            <p className="text-lg">
              A Landing Page is the best solution for those who are launching a brand new product or rebrand. Start capturing your clients attention and promote your contacts with a single page
              design.
            </p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:gap-4">
              <div className="flex flex-col justify-between border p-8 md:p-4 sm:p-8">
                <h2 className="mb-4 text-3xl font-semibold">Vanilla HTML</h2>

                <ul className="h-32 text-base md:h-full mb-4">
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> 01 Page
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Custom Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Responsive Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Clean & SEO-Friendly Code
                  </li>
                </ul>

                <p className="text-lg font-medium">Stack : HTML + CSS + JS</p>

                <button className="btn w-fit mt-4 sm:w-full">
                  <Link href="/contact-us">Request A Quote</Link>
                </button>
              </div>

              <div className="flex flex-col justify-between border p-8 md:p-4 sm:p-8">
                <h2 className="mb-4 text-3xl font-semibold">ReactJS</h2>

                <ul className="h-32 text-base md:h-full mb-4">
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> 01 Page
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Custom Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Responsive Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Clean & SEO-Friendly Code
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Fast Loading Time
                  </li>
                </ul>

                <p className="text-lg font-medium">Stack : ReactJS + TailwindCSS</p>

                <button className="btn w-fit mt-4 sm:w-full">
                  <Link href="/contact-us">Request A Quote</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8 ml-8 sm:ml-0">
            <h2 className="text-2xl uppercase text-neutral-300">Business Websites</h2>
            <p className="text-lg">A business website is the online hub for your company and everything you do, allows you to reach new customers, which is key for your company&apos;s growth.</p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:gap-4">
              <div className="flex flex-col justify-between border p-8 md:p-4 sm:p-8">
                <h2 className="mb-4 text-3xl font-semibold">Basic</h2>

                <ul className="h-32">
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> 05 Pages
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Custom Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Responsive Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Clean & SEO-Friendly Code
                  </li>
                </ul>

                <p className="text-lg font-medium">Stack : ReactJS + TailwindCSS</p>

                <button className="btn w-fit mt-4 sm:w-full">
                  <Link href="/contact-us">Request A Quote</Link>
                </button>
              </div>

              <div className="flex flex-col justify-between border p-8 md:p-4 sm:p-8">
                <h2 className="mb-4 text-3xl font-semibold">Large-scale</h2>

                <ul className="h-32">
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> 10 - Custom Limit
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Custom Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Responsive Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Clean & SEO-Friendly Code
                  </li>
                </ul>

                <p className="text-lg font-medium">Stack : ReactJS + TailwindCSS</p>

                <button className="btn w-fit mt-4 sm:w-full">
                  <Link href="/contact-us">Request A Quote</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8 ml-8 sm:ml-0">
            <h2 className="text-2xl uppercase text-neutral-300">E-commerce Websites</h2>
            <p className="text-lg">
              An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.
            </p>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:gap-4">
              <div className="flex flex-col justify-between border p-8 md:p-4 sm:p-8">
                <h2 className="mb-4 text-3xl font-semibold">ReactJS</h2>

                <ul className="h-32 text-base md:h-full mb-4">
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Custom Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Responsive Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Clean & SEO-Friendly Code
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Admin Dashboard
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Payment Gateway Integration
                  </li>
                </ul>

                <p className="text-lg font-medium">Stack : ReactJS + TailwindCSS</p>

                <button className="btn w-fit mt-4 sm:w-full">
                  <Link href="/contact-us">Request A Quote</Link>
                </button>
              </div>

              <div className="flex flex-col justify-between border p-8 md:p-4 sm:p-8">
                <h2 className="mb-4 text-3xl font-semibold">PHP</h2>
                <ul className="h-32 text-base md:h-full mb-4">
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Custom Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Responsive Design
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Clean & SEO-Friendly Code
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Admin Dashboard
                  </li>
                  <li className="flex gap-1 items-center text-base">
                    <p className="fill-sky-600 h-5 w-5">{Icons.check}</p> Payment Gateway Integration
                  </li>
                </ul>

                <p className="text-lg font-medium">Stack : PHP</p>

                <button className="btn w-fit mt-4 sm:w-full">
                  <Link href="/contact-us">Request A Quote</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container max-w-6xl text-lg my-20 sm:my-10">
          <h1 className="text-4xl uppercase text-neutral-300 mb-4 sm:text-3xl">02. Software Development</h1>
          <p className="text-xl sm:text-lg">
            Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks,
            or other software components. We will identify a custom solution to fit your idea, timeline, budget and build the application.
          </p>
        </section>

        <section className="container max-w-6xl text-lg my-20 sm:my-10">
          <h1 className="text-4xl uppercase text-neutral-300 mb-4 sm:text-3xl">03. Mobile Apps Development</h1>
          <p className="text-xl sm:text-lg">
            Mobile application development is the process of creating software applications that run on a mobile device, such as smartphones and other hand-held devices. It involves a set of processes
            and procedures, including designing, coding, testing, debugging and deploying the app.
          </p>
        </section>

        <section className="container max-w-6xl text-lg my-20 sm:my-10">
          <h1 className="text-4xl uppercase text-neutral-300 mb-4 sm:text-3xl">04. Search Engine Optimization</h1>
          <p className="text-xl sm:text-lg">
            Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than
            direct traffic or paid traffic.We can improve the quality and quantity of website traffic to your website from search engines.
          </p>
        </section>

        <section className="container max-w-6xl my-20 text-center sm:my-12">
          <h2 className="text-7xl text-white font-bold sm:text-5xl">Building Blocks</h2>

          <div className=" max-w-3xl m-auto flex gap-8 w-full flex-wrap mt-8 sm:gap-6">
            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.react}</div>
              <p className="text-sm">ReactJS</p>
            </div>
            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.nextjs}</div>
              <p className="text-sm">NextJS</p>
            </div>

            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.sanity}</div>
              <p className="text-sm">Sanity</p>
            </div>

            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.supabase}</div>
              <p className="text-sm">Supabase</p>
            </div>

            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.firebase}</div>
              <p className="text-sm">Firebase</p>
            </div>

            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.medusa}</div>
              <p className="text-sm">MedusaJS</p>
            </div>

            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.vercel}</div>
              <p className="text-sm">Vercel</p>
            </div>
            <div className="fill-white space-y-2 w-fit m-auto">
              <div className="h-12 w-fit m-auto sm:h-10">{Icons.netlify}</div>
              <p className="text-sm">Netlify</p>
            </div>
          </div>
        </section>

        <section className="container max-w-6xl my-20 text-center sm:my-12">
          <h2 className="text-7xl text-white font-bold sm:text-5xl">Process</h2>

          <div className="grid grid-cols-5 gap-4 mt-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="border py-4 px-2">
              <h1 className="text-6xl font-bold">01</h1>
              <p className="text-3xl font-medium mb-2">Discussion</p>
              <p className="leading-tight">Clarify the vision, create specs and get an estimate</p>
            </div>
            <div className="border py-4 px-2">
              <h1 className="text-6xl font-bold">02</h1>
              <p className="text-3xl font-medium mb-2">Prototype</p>
              <p className="leading-tight">Together with our UX Designers create a clickable prototype</p>
            </div>
            <div className="border py-4 px-2">
              <h1 className="text-6xl font-bold">03</h1>
              <p className="text-3xl font-medium mb-2">Develop + Revision</p>
              <p className="leading-tight">We’ll iterate your product. See your product come alive in demos and adjust scopes as needed</p>
            </div>
            <div className="border py-4 px-2">
              <h1 className="text-6xl font-bold">04</h1>
              <p className="text-3xl font-medium mb-2">Deploy</p>
              <p className="leading-tight">We’ll iterate your product. See your product come alive in demos and adjust scopes as needed</p>
            </div>
            <div className="border py-4 px-2">
              <h1 className="text-6xl font-bold">05</h1>
              <p className="text-3xl font-medium mb-2">Maintenance</p>
              <p className="leading-tight">Keep your app up-to-date and secure. Improve it based on user feedback</p>
            </div>
          </div>
        </section>

        <section className="container max-w-6xl overflow-x-hidden scroll-smooth my-20 sm:my-10">
          <div className="flex items-center justify-between p-8 gap-12 bg-neutral-900 sm:flex-col sm:items-start sm:gap-6 sm:p-8">
            <h2 className="text-2xl sm:text-xl">
              Couldn&apos;t find what you were looking for?
              <br />
              Don&apos;t know what you exactly want?
              <br />
              Need any other custom solution?
            </h2>

            <button className="btn w-40 sm:w-full sm:text-lg">
              <Link href="contact-us">Contact Us</Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
