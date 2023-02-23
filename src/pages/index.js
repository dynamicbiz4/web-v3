import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import RecentProjects from "../components/Home/RecentProjects";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Blog from "../components/Home/Blog";

export default function Home({ posts, stats, projects }) {
  const [postsData, setPostsData] = useState([]);
  const [statsData, setStatsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    posts.length && setPostsData(posts);
    stats.length && setStatsData(stats[0]);
    projects.length && setProjectsData(projects);
  }, []);

  return (
    <main>
      <Hero />
      <About stats={statsData} />
      {/* <Clients /> */}
      <Services />
      <RecentProjects projects={projectsData} />
      <Blog posts={postsData} />
      <Contact />
    </main>
  );
}

export const sortByDate = (a, b) => {
  return new Date(b._createdAt) - new Date(a._createdAt);
};

export const getServerSideProps = async (pageContext) => {
  const postQuery = encodeURIComponent('*[ _type == "post" ]');
  const statsQuery = encodeURIComponent('*[ _type == "stats" ]');
  const projectsQuery = encodeURIComponent('*[ _type == "projects" ]');

  const postUrl = `https://8hblij9d.api.sanity.io/v1/data/query/production?query=${postQuery}`;
  const statsUrl = `https://8hblij9d.api.sanity.io/v1/data/query/production?query=${statsQuery}`;
  const projectsUrl = `https://8hblij9d.api.sanity.io/v1/data/query/production?query=${projectsQuery}`;

  const postData = await fetch(postUrl).then((res) => res.json());
  const statsData = await fetch(statsUrl).then((res) => res.json());
  const projectsData = await fetch(projectsUrl).then((res) => res.json());

  return {
    props: {
      posts: postData?.result.sort(sortByDate),
      stats: statsData?.result,
      projects: projectsData?.result.sort(sortByDate),
    },
  };
};
