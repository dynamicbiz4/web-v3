import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../data/icons";

const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing | Dynamic Biz</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full">
          <Image alt="BG Image" src="/pricing-bg.jpg" className="object-cover object-bottom" fill />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
          <h2 className="absolute top-1/2 left-0 right-0 w-fit m-auto text-7xl text-white font-bold">Pricing</h2>
        </section>

        <section className="container max-w-6xl text-lg my-20 space-y-8 sm:my-10">
          <h2 className="text-3xl uppercase text-neutral-300">Landing Pages</h2>
          <p className="text-lg">
            A Landing Page is the best solution for those who are launching a brand new product or rebrand. Start capturing your clients attention and promote your contacts with a single page design.
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
              {/* <p className="text-lg font-medium">Starting At : 35, 000LKR (100USD)*</p> */}

              <button className="btn w-fit mt-4 sm:w-full">Request A Quote</button>
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
              {/* <p className="text-lg font-medium">Starting At : 55, 000LKR (150USD)*</p> */}

              <button className="btn w-fit mt-4 sm:w-full">Request A Quote</button>
            </div>
          </div>
        </section>

        <section className="container max-w-6xl text-lg my-20 space-y-8 sm:my-10">
          <h2 className="text-3xl uppercase text-neutral-300">Business Websites</h2>
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
              {/* <p className="text-lg font-medium">Starting At : 90, 000LKR (250USD)*</p> */}

              <button className="btn w-fit mt-4 sm:w-full">Request A Quote</button>
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
              {/* <p className="text-lg font-medium">Starting At : 160, 000LKR (450USD)*</p> */}

              <button className="btn w-fit mt-4 sm:w-full">Request A Quote</button>
            </div>
          </div>
        </section>

        <section className="container max-w-6xl text-lg my-20 space-y-8 sm:my-10">
          <h2 className="text-3xl uppercase text-neutral-300">E-commerce Websites</h2>
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
              {/* <p className="text-lg font-medium">Starting At : 220, 000LKR (600USD)*</p> */}

              <button className="btn w-fit mt-4 sm:w-full">Request A Quote</button>
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
              {/* <p className="text-lg font-medium">Starting At : 165, 000LKR (450USD)*</p> */}

              <button className="btn w-fit mt-4 sm:w-full">Request A Quote</button>
            </div>
          </div>
        </section>

        {/* <section className="container max-w-6xl text-lg mt-4 mb-10 space-y-8">
          <p className="text-lg">*All the prices mentioned above are rough prices. Price may vary on you requirments.</p>
        </section> */}

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

export default PricingPage;
