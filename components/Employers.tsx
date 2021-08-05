import Heading from './Heading';
import Employer from './Employer';
import RainbowText from './RainbowText';

const Employers = ({ employers }: any) => {
    return (
        <div>
            <Heading>
              <RainbowText text="Work Experience"/>
            </Heading>
            <p>The nine-to-fives that often ended after five.</p>
            {
              employers.map((employer: any, key: number) => (
                <Employer key={key} employer={employer} />
              ))
            }
        </div>
    )
}

export default Employers;
