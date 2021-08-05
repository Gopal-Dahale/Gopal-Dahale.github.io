import Home from '../components/home-page/home';
import { projectsList } from '../data/projects-list';
import PageLayout from '../components/layout/pageLayout';

export default function Index({ projects }) {
  return (
    <PageLayout title="Gopal Dahale - Full Stack Developer/ Machine Learning Developer">
      {/* <Home projects={projects} /> */}
      Under Construction
    </PageLayout>
  );
}

export function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    }
  };
}
