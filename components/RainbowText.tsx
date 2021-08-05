const randomAnimationDelay = (index: number, length: number) => {
  const random = ((index * 0.2) - (length * 0.2));
  return { animationDelay: '-' + random + 's' }
}

const RainbowText = ({text, className}: any) => (
  <>
    {
      text.split("<br/>").map((string: any, key: number) => (
        <p className={`animated-text ${className ? className : ''}`} key={`${key}`}>
          {
            string.split('').map((string: any, key: number) => (
              <span key={`${key}`} style={randomAnimationDelay(key, text.split("<br/>").length)}>{string}</span>
            ))
          }
        </p>
      ))
    }
  </>
)

export default RainbowText;
