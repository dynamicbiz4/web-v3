import Head from "next/head";
import Image from "next/image";
import { team } from "../data/team";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import useWindowDimensions from "../hooks/useWindowDimensions";

const AboutUsPage = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>About | Dynamic Biz</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full">
          <Image alt="BG Image" src="/about-bg.jpg" className="object-cover" fill />
          {/* <video className="w-full h-full object-cover" autoPlay loop muted controls>
            <source src="/intro.mp4" type="video/mp4" />
          </video> */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
          <h2 className="container absolute top-1/2 left-0 right-0 w-fit m-auto text-7xl text-center text-white font-bold sm:text-6xl">This Is Our Story</h2>
        </section>

        <section className="container max-w-6xl text-xl my-20 sm:text-lg">
          <h1 className="text-3xl text-neutral-300 mb-4 sm:text-2xl">We Are Dynamic Biz.</h1>
          <p>
            Dynamic Biz is an IT solution company founded by entrepreneur Isuru Chandimal Peiris, inspired by the desire to digitalize Sri Lanka. It started in 2022 with six of his friends. We
            innovate, connect, inspire, and invest our knowledge to give a better dynamic experience to our clients, and we are always working on that vision. Our team is always striving to provide
            the most efficient service to our clients. We are an ambitious, courageous, inspired, and knowledgeable team that provide our maximum effort to our clients. Our aim is to provide better
            service, inspire, and also give the best experience for our beloved clients.
          </p>

          <div className="grid grid-cols-2 gap-8 my-20 sm:grid-cols-1 sm:gap-6 sm:my-12">
            <div className="text-right sm:text-left">
              <h2 className="text-2xl uppercase text-neutral-300 mb-4">Vision</h2>
              <p className="max-w-md sm:max-w-full ml-auto">Dynamic Biz is moving forward with changing world with modern technology & becoming a world to provide technical solutions</p>
            </div>

            <div className="mt-16 sm:mt-0">
              <h2 className="text-2xl uppercase text-neutral-300 mb-4">Mission</h2>
              <p className="max-w-md sm:max-w-full">To develop lasting client relationships by providing exceptional stakeholder value in an environment of trust & respect.</p>
            </div>
          </div>

          <div className="my-20 sm:my-12">
            <h1 className="text-2xl uppercase text-neutral-300 mb-8">Our Core Values</h1>

            <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
              <div className="relative">
                <h2 className="text-7xl text-neutral-500">01</h2>
                <p className="text-3xl absolute bottom-0 left-12 font-semibold">Integrity</p>
              </div>
              <div className="relative">
                <h2 className="text-7xl text-neutral-500">02</h2>
                <p className="text-3xl absolute bottom-0 left-12 font-semibold">HSE</p>
              </div>
              <div className="relative">
                <h2 className="text-7xl text-neutral-500">03</h2>
                <p className="text-3xl absolute bottom-0 left-12 font-semibold">Quality</p>
              </div>
              <div className="relative">
                <h2 className="text-7xl text-neutral-500">04</h2>
                <p className="text-3xl absolute bottom-0 left-12 font-semibold">Reliability</p>
              </div>
              <div className="relative">
                <h2 className="text-7xl text-neutral-500">05</h2>
                <p className="text-3xl absolute bottom-0 left-12 font-semibold">Team Work</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="container max-w-6xl text-lg my-20 sm:my-12">
          <h1 className="text-2xl uppercase text-neutral-300 mb-8">People who run the show</h1>

          <Swiper
            slidesPerView={width > 920 ? 5 : width > 680 ? 3 : width > 460 ? 2 : width < 460 && 1}
            spaceBetween={5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper my-8"
            loop={true}
          >
            {team.map(({ name, positions, avatar }, index) => {
              return (
                <SwiperSlide key={index} className="p-4 text-center">
                  <div className="m-auto">
                    <Image src={avatar} width={200} height={200} className="rounded-full h-full w-full block m-auto object-cover" alt={avatar.replace("/team/", "")} />
                  </div>
                  <div>
                    <p className="mt-4 text-xl font-semibold">{name}</p>

                    {positions.map((position, index) => {
                      return (
                        <p className="leading-tight text-sm" key={index}>
                          {position}
                        </p>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section> */}
      </main>
    </>
  );
};

export default AboutUsPage;
