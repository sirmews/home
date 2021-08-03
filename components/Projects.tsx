import Project from './Project';
import RainbowText from './RainbowText';

const Projects = ({projects}: any) => {
    return (
        <section id="employers" className="w-1/2">
            <div className="text-2xl font-bold">
              <RainbowText text="Projects"/>
            </div>
            <p>All of those things done outside of nine-to-fives and in-between.</p>
            {
              projects.map((project: any, key: number) => (
                <Project key={key} project={project} />
              ))
            }
        </section>
    )
}

export default Projects;
