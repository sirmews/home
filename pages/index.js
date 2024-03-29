import Head from 'next/head'
import client from '../utils/contentful';
import Projects from '../components/Projects';
import Employers from '../components/Employers';

export default function Home({ projects, employers }) {
  return (
    <div className="container m-auto">
      <section className="w-full sm:w-2/3 md:w-1/2">
        <Employers employers={employers}/>
      </section>
      <section className="w-full sm:w-2/3 md:w-1/2">
        <Projects projects={projects}/>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const response = await client(`
    {
      employmentCollection (order: [startDate_DESC]) {
        items {
            employer
            title
            location
            startDate
            endDate
            description
            toolchain
        }
      }
      projectsCollection {
        items {
            client
            job
            link
            description
            technologies
            endDate
            startDate
        }
      }
    }`
  );

  const { projectsCollection } = response;
  const { employmentCollection } = response;

  return {
    props: {
      projects: projectsCollection.items,
      employers: employmentCollection.items
    }
  }

}
