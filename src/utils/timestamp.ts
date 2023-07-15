export const getTime = () => {
  const now = new Date();
  return `${now.getHours()}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}`;
};
