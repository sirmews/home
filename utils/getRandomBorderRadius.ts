const getRandomColor = () => {

  const numOfValues = 4;

  return new Array(numOfValues)
    .fill('')
    .map(() => Math.floor(Math.random() * 100) + '%')
    .join(' ');
};

export default getRandomColor;
