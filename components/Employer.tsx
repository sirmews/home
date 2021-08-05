import Date from './Date';
import Pills from './Pills';

const Employer = ({ employer }: any) => (
  <div className="employer mb-12 border-b-2">
    <h3 className="text-xl">{employer.employer} - {employer.title}</h3>
    <p className="mb-0">{employer.location}</p>
    <p className="mb-4">
      <Date date={employer.startDate} /> - <Date date={employer.endDate} />
    </p>
    <p className="mb-4">{employer.description}</p>
    <div className="mb-4">
      <Pills pills={employer.toolchain} />
    </div>
  </div>
)

export default Employer;
