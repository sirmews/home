const getRandomColor = () => {
  // max value of l is 100, but I set to 60 cause I want to generate dark colors
  // (use for background with white/light font color)
  const h = Math.floor(Math.random() * 360),
        s = Math.floor(Math.random() * 100) + '%',
        l = Math.floor(Math.random() * 60) + '%';

  return `hsl(${h}, 50%, 40%)`;
};

export default getRandomColor;
