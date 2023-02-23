import Head from "next/head";
import Image from "next/image";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
const BlockContent = require("@sanity/block-content-to-react");

const BlogPost = ({ post }) => {
  const imgBuilder = imageUrlBuilder({
    projectId: "8hblij9d",
    dataset: "production",
  });

  return (
    <>
      <Head>
        <title>{post.title} | Dynamic Biz</title>
      </Head>

      <main>
        <section className="relative h-[30rem] w-full">
          <Image alt="BG Image" src={imgBuilder.image(post.mainImage).url()} className="object-cover" fill />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black" />
          <h2 className="container absolute top-1/2 left-0 right-0 w-fit m-auto text-7xl text-center text-white font-bold sm:text-6xl">{post.title}</h2>
        </section>

        <section className="container max-w-6xl text-xl my-20 sm:text-lg reset-css">
          <BlockContent blocks={post.body} />
        </section>
      </main>
    </>
  );
};

export default BlogPost;

export const getServerSideProps = async (pageContext) => {
  const postSlug = pageContext.query.slug;

  const query = encodeURIComponent(`*[_type == 'post' && slug.current == '${postSlug}']`);
  const url = `https://8hblij9d.api.sanity.io/v1/data/query/production?query=${query}`;

  const results = await fetch(url).then((res) => res.json());

  if (!results.result || !results.result.length) {
    return {
      props: {
        post: [],
      },
    };
  } else {
    return {
      props: {
        post: results.result[0],
      },
    };
  }
};
