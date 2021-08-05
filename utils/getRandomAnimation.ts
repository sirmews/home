const randomAnimationDelay = (index: number, length: number) => {
  const random = ((index * 0.5) - (length * 0.2));
  return { animationDelay: random + 's' }
}

export default randomAnimationDelay;
