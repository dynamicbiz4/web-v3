import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const Testimonials = ({ reviews }) => {
  const imgBuilder = imageUrlBuilder({
    projectId: "8hblij9d",
    dataset: "production",
  });

  console.log(reviews);

  const truncate = (string, n) => {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  };

  return (
    <section className="container max-w-6xl overflow-x-hidden scroll-smooth my-20 sm:my-8">
      <div className="my-8">
        <h2 className="text-4xl uppercase text-neutral-300 mb-8 text-center">Testimonials</h2>
        {/* <p className="text-center">
          We are a company driven by innovation with a focus on developing dynamic web, mobile & desktop application solutions for anyone wants to take advantage of digital technologies.
        </p> */}

        <div className="mt-8 grid grid-cols-3 gap-8 xmd:grid-cols-2 sm:grid-cols-1">
          {reviews.slice(0, 3).map(({ name, company, mainImage, designation, review }, index) => {
            return (
              <div className="bg-neutral-900 h-full p-4 text-center" key={index}>
                <p>{review}</p>

                {mainImage && <Image src={imgBuilder.image(mainImage).url()} className="w-16 h-16 object-cover rounded-full block mx-auto my-4" width={200} height={200} alt={company} />}
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm">{designation} @ {company}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
