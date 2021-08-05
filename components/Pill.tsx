import { useSpring, animated } from 'react-spring';
import getRandomColor from '../utils/getRandomColor';
import getRandomBorderRadius from '../utils/getRandomBorderRadius';


const Pill = ({ pill }: any) => {
  const props = useSpring({
    to: { borderRadius: `${getRandomBorderRadius()} / ${getRandomBorderRadius()}` },
    from: { borderRadius: `${getRandomBorderRadius()} / ${getRandomBorderRadius()}` },
    loop: { reverse: true },
    config: { duration: 2000, friction:20 }
  })
  return (
    <animated.span
      style={{
        ...props,
        backgroundColor: `${getRandomColor()}`,
      }}
      className={`inline-block font-medium py-1 px-2 text-sm`}
    >
      {pill}
    </animated.span>
  )
}


export default Pill;
