export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};
