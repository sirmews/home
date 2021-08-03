import Head from 'next/head'
import client from '../utils/contentful';
import Projects from '../components/Projects';
import Employers from '../components/Employers';

export default function Home({projects, employers}) {
  return (
    <div className="container m-auto">
      <Employers employers={employers}/>
      <Projects projects={projects}/>
    </div>
  )
}

export async function getStaticProps() {
  const response = await client(`
    {
      employmentCollection {
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
      employment: employmentCollection.items
    }
  }

}
