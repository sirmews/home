import Paragraph from './Paragraph';
import Link from './Link';

const Project = ({project}: any) => (
  <div className="employer">
    <h3 className="">{project.client} - {project.job}</h3>
    { project.link ? (
      <p>
        <Link title={project.link} link={project.link} />
      </p>
    ) : ''}
    <Paragraph text={project.description} />
  </div>
)

export default Project;
