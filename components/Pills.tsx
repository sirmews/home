import Pill from './Pill';

const randomAnimationDelay = (index: number, length: number) => {
  const random = ((index * 0.5) - (length * 0.2));
  return { animationDelay: random + 's' }
}

const Pills = ({ pills }: any) => (
  <div className="space-x-2 space-y-2">
    {
      pills.split(',').map((pill: any, key: number) => (
        <Pill key={`${key}`} pill={pill} />
      ))
    }
  </div>
)

export default Pills;
