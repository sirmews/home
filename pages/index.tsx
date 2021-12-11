import Head from 'next/head'
import client from '../utils/contentful';
import Projects from '../components/Projects';
import Employers from '../components/Employers';

export default function Home({ projects, employers }: any) {
  return (
    <div className="container m-auto">
      <section className="w-full sm:w-2/3 md:w-1/2">
        <Projects projects={projects}/>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const response = await client(`
    {
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
      postsCollection {
          items {
              title
              content
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
