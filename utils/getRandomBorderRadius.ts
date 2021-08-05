const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

const getRandomColor = () => {

  const numOfValues = 4;

  return new Array(numOfValues)
    .fill('')
    .map(() => Math.floor(random(2, 5) * 100) + '%')
    .join(' ');
};

export default getRandomColor;
