export const transformValues = (values) => {
  const params = {};

  for (const key in values) {
    if (values[key] === "any" || values[key] === "" || values[key] === []) {
    } else {
      params[key] = values[key];
    }
  }

  return params;
};
