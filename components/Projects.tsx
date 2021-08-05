import Heading from './Heading';
import Project from './Project';
import RainbowText from './RainbowText';

const Projects = ({ projects }: any) => {
    return (
        <div>
            <Heading>
              <RainbowText text="Projects"/>
            </Heading>
            <p>All of those things done outside of nine-to-fives and in-between.</p>
            {
              projects.map((project: any, key: number) => (
                <Project key={key} project={project} />
              ))
            }
        </div>
    )
}

export default Projects;
