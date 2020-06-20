const URL = "https://jsonplaceholder.typicode.com/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

export const ENDPOINTS = {
  GET_TEMPLATES: (category = "todo", count = 2) =>
    `${PROXY}/${URL}/${category}/${count}`,
};
