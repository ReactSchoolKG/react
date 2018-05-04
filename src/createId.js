const createId = () => {
  let counter = 1;
  return () => counter++;
};

export default createId();
