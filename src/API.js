const URL = "https://jsonplaceholder.typicode.com";
const PROXY = "https://cors-anywhere.herokuapp.com";

// TODO: Use proxy only for figma somehow
export const ENDPOINTS = {
  TEMPLATES: (category = "todos", id = 2) => `${URL}/${category}/${count}`,
};
