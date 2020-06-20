import * as R from "ramda";
import { ENDPOINTS } from "../../API";

export const getTemplates = (filters) =>
  fetch(ENDPOINTS.TEMPLATES()).then((res) => res.json());

export const deleteTemplate = ({ id, token }) =>
  fetch(ENDPOINTS.TEMPLATE(id), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

export const updateTemplate = ({ body, accessToken }) =>
  fetch(ENDPOINTS.TEMPLATES(), {
    method: "PUT",
    headers: {
      //'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },

    body,
  }).then((res) => res.json());

export const createTemplate = ({ body, accessToken }) =>
  fetch(ENDPOINTS.TEMPLATES(), {
    method: "POST",
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
    body,
  }).then((res) => res.json());

export const getTemplateById = ({ id }) =>
  fetch(ENDPOINTS.TEMPLATE(id)).then((res) => res.json());
