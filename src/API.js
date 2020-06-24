import { isFigma } from "./utils";

const URL = "https://jsonplaceholder.typicode.com";
const PROXY = "https://cors-anywhere.herokuapp.com";

export const ENDPOINTS = {
  TEMPLATES: (category = "todos", id = 2) =>
    `${isFigma && PROXY}/${URL}/${category}/${count}`,
};
