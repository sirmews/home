const RandomBackground = ({ children, style, className }: any) => (
  <span className={`animated-border-radius ${className}`} style={{...style}}>{children}</span>
)

export default RandomBackground;
