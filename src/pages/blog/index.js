import Head from "next/head";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const BlogPage = ({ posts }) => {
  const imgBuilder = imageUrlBuilder({
    projectId: "8hblij9d",
    dataset: "production",
  });

  const truncate = (string, n) => {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  };

  return (
    <>
      <Head>
        <title>About | Dynamic Biz</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full">
          <Image alt="BG Image" src="/about-bg.jpg" className="object-cover" fill />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
          <h2 className="container absolute top-1/2 left-0 right-0 w-fit m-auto text-7xl text-center text-white font-bold sm:text-6xl">Dynamic Blog</h2>
        </section>

        <section className="container max-w-6xl text-xl my-20 sm:text-lg">
          <div className="mt-8 grid grid-cols-3 gap-8 xmd:grid-cols-2 sm:grid-cols-1">
            {posts.map(({ title, publishedAt, mainImage, slug, excerpt }, index) => {
              var date = new Date(publishedAt);

              return (
                <Link href={`/blog/${slug.current}`} key={index}>
                  <div className="bg-neutral-900">
                    {mainImage && (
                      <div className="relative h-56 w-full">
                        <Image src={imgBuilder.image(mainImage).url()} className="w-full h-auto object-cover" alt={title} fill />
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
        </section>
      </main>
    </>
  );
};

export default BlogPage;

export const sortByDate = (a, b) => {
  return new Date(b._createdAt) - new Date(a._createdAt);
};

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://8hblij9d.api.sanity.io/v1/data/query/production?query=${query}`;

  const results = await fetch(url).then((res) => res.json());

  if (!results.result || !results.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: results.result.sort(sortByDate),
      },
    };
  }
};
