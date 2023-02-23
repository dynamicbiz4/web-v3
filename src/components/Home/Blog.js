import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const Blog = ({ posts }) => {
  const imgBuilder = imageUrlBuilder({
    projectId: "8hblij9d",
    dataset: "production",
  });

  const truncate = (string, n) => {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  };

  return (
    <section className="container max-w-6xl overflow-x-hidden scroll-smooth my-20 sm:my-8">
      <div className="my-8">
        <h2 className="text-4xl uppercase text-neutral-300 mb-8 text-center">Dynamic Blog</h2>
        <p className="text-center">
          We are a company driven by innovation with a focus on developing dynamic web, mobile & desktop application solutions for anyone wants to take advantage of digital technologies.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-8 xmd:grid-cols-2 sm:grid-cols-1">
          {posts.slice(0, 3).map(({ title, publishedAt, mainImage, slug, excerpt }, index) => {
            var date = new Date(publishedAt);

            return (
              <Link href={`/blog/${slug.current}`} key={index}>
                <div className="bg-neutral-900 h-full">
                  {mainImage && (
                    <div className="relative h-56 w-full">
                      <Image src={imgBuilder.image(mainImage).url()} className="w-full h-auto object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={title} fill />
                    </div>
                  )}

                  <div className="p-4">
                    <p className="text-2xl font-bold">{title}</p>
                    <p className="text-md text-neutral-400 mt-2">
                      {date.toLocaleString("default", { month: "long" })} {date.getDate()}, {date.getFullYear()}
                    </p>
                    {excerpt && <p className="mt-2 text-lg text-neutral-400">{truncate(excerpt, 90)}</p>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <button className="btn w-fit block m-auto">
        <Link href="/blog">View More</Link>
      </button>
    </section>
  );
};

export default Blog;
