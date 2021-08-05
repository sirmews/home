const formatDate = (date: any) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-NZ", {
    year: 'numeric',
    month: 'long'
  });
};

export default formatDate;
