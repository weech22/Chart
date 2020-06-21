import * as R from "ramda";

export const getTemplates = R.prop("templates");

export const getTemplateList = (state) =>
  R.path(["userShots", "shotList"], state);
