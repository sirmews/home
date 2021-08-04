const Pill = ({ pill, style }: any) => (
  <span style={{...style}} className={`inline-block font-medium py-0.5 px-2 text-sm animated-background-color`}>{pill}</span>
)


export default Pill;
