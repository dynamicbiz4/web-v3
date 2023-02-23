import Head from "next/head";
import { useEffect, useState } from "react";

import Hero from "../components/Home/Hero";
import RecentProjects from "../components/Home/RecentProjects";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Clients from "../components/Home/Clients";
import Blog from "../components/Home/Blog";

export default function Home({ posts }) {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    posts.length && setPostsData(posts);
  }, [posts]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <main>
      <Hero />
      <About />
      {/* <Clients /> */}
      <Services />
      <RecentProjects />
      <Blog posts={postsData} />
      <Contact />
    </main>
  );
}

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
