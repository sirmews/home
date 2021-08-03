import Employer from './Employer';
import RainbowText from './RainbowText';

const Employers = ({employers}: any) => {
    return (
        <section id="employers" className="w-1/2">
            <div className="text-2xl font-bold">
              <RainbowText text="Work Experience"/>
            </div>
            <p>The nine-to-fives that often ended after five.</p>
        </section>
    )
}

export default Employers;
