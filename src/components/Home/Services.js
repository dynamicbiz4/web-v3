import Link from "next/link";

const Services = () => {
  const services = ["Web Development", "Software Development", "Search Engine Optimization", "UI/UX Designing", "Product Optimization & Maintenance"];

  return (
    <section className="container max-w-6xl scroll-smooth my-20 sm:my-8 sm:h-fit">
      <div className="flex flex-row-reverse mt-16 gap-12 md:gap-6 sm:flex-col">
        <div className="max-w-md md:max-w-sm">
          <h2 className="text-4xl uppercase text-neutral-300 mb-8">We Do Everything</h2>
          <p className="mt-8 text-lg">
            For everyone looking to benefit from digital technology, we are offering innovation with an emphasis on creating dynamic web, mobile, desktop application, and system solutions.
          </p>
          <Link href="services">
            <button className="mt-4 btn">View All Services</button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 sm:grid-cols-2 sm:h-full">
          {services.map((service, index) => {
            return (
              <div className="text-xl bg-gradient-to-tr from-transparent to-neutral-900 p-6 h-36 lg:text-xl lg:h-20 lg:p-4 md:h-fit sm:text-lg" key={index}>
                <h1>{service}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
