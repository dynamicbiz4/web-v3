import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import RecentProjects from "../components/Home/RecentProjects";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Blog from "../components/Home/Blog";
import Testimonials from "../components/Home/Testimonials";

export default function Home({ posts, stats, projects, reviews }) {
  const [postsData, setPostsData] = useState([]);
  const [statsData, setStatsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    posts.length && setPostsData(posts);
    stats.length && setStatsData(stats[0]);
    projects.length && setProjectsData(projects);
    reviews.length && setReviewsData(reviews);
  }, []);

  return (
    <main>
      <Hero />
      <About stats={statsData} />
      {/* <Clients /> */}
      <Services />
      <RecentProjects projects={projectsData} />
      <Testimonials reviews={reviews} />
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
  const reviewsQuery = encodeURIComponent('*[ _type == "reviews" ]');

  const baseUrl = `https://8hblij9d.api.sanity.io/v1/data/query/production?query=`;

  const postData = await fetch(`${baseUrl}${postQuery}`).then((res) => res.json());
  const statsData = await fetch(`${baseUrl}${statsQuery}`).then((res) => res.json());
  const projectsData = await fetch(`${baseUrl}${projectsQuery}`).then((res) => res.json());
  const reviewsData = await fetch(`${baseUrl}${reviewsQuery}`).then((res) => res.json());

  return {
    props: {
      posts: postData?.result.sort(sortByDate),
      stats: statsData?.result,
      projects: projectsData?.result.sort(sortByDate),
      reviews: reviewsData?.result.sort(sortByDate),
    },
  };
};
