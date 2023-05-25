export const transformValues = (values) => {
  const params = {};

  for (const key in values) {
    params[key] =
      values[key] === "any" || values[key] === "" || values[key] === []
        ? null
        : values[key];
  }
  
  return params;
};
